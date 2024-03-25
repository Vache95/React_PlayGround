import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL,
    headers: {
        "Content-Type": "application/json",
      },
    params: {},
});
instance.interceptors.request.use(
    (config) => {
		const token = localStorage.get('token');
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);
instance.interceptors.response.use(
	res => {
		return res;
	},
	async err => {
			if (err.response.status === 401) {
				localStorage.removeItem('token');
				localStorage.removeItem('refreshtoken');
				return await instance
					.post('Accounts/Logout')
					.then(() => {
						window.location.href = 'login';
					})
					.catch(e => e);
			}
		
		return Promise.reject(err);
	}
);
export default instance;
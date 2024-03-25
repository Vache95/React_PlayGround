interface initialStatType {
    accessToken: string | null,
    loading: boolean;
    error: string;
}

export const initialState: initialStatType = {
    accessToken: localStorage.getItem("token") || '',
    loading: false,
    error: '',
};
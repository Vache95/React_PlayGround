import { LOGIN } from "@/constants/url";
import AxiosInstance from "@/lib/api";
import { LoginType } from "@/types";


export const loginPost = (data: LoginType) => AxiosInstance.post(LOGIN, data)

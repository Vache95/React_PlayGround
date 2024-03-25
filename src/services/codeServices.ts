import { REGISTER } from "@/constants/url";
import AxiosInstance from "@/lib/api";
import { CodeType } from "@/types";


export const codePost = (data:CodeType) => AxiosInstance.post(REGISTER, data);
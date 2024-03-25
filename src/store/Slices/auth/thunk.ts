import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginPost } from "@/services/loginServices";
import { codePost } from "@/services/codeServices";
import { CodeType, LoginType } from "@/types";



export const LoginThunk = createAsyncThunk<LoginType, LoginType, { rejectValue: string }>("authThunk", async (data, { rejectWithValue }) => {
  return loginPost(data)
    .then((res) => {
      return res.data;
    })
    .catch(error => rejectWithValue(error.response.data));
});

export const CodeThunk = createAsyncThunk<CodeType, CodeType, { rejectValue: string }>("authThunk", async (data, { rejectWithValue }) => {
  return codePost(data)
    .then((res) => {
      localStorage.setItem("token", res?.data?.jwt?.token);
      localStorage.setItem("refreshtoken", res?.data?.jwt?.refreshToken);
      return res.data;
    })
    .catch(error => rejectWithValue(error.response.data));
});
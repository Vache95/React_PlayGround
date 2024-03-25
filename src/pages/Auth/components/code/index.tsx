import { EmailInfo, Form, SmsInfo } from "./style.ts";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import OtpInput from 'react-otp-input';
import Button from "@/commons/components/Button/index.tsx";
import { Container } from "../email/style.ts";
import { CodeThunk } from "@/store/Slices/auth/thunk.ts";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks/useDispatch.ts";

type FormValues = {
    code: string
}



export const CodeComponent = () => {
    const [otp, setOtp] = useState('');
    const { handleSubmit } = useForm<FormValues>()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        //test
        const CodeData = {
            email: "demo@demo.com",
            code: "111111",
            languageID: "1"
        }
        dispatch(CodeThunk(CodeData))
        navigate('/dashboard')
    }
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <SmsInfo>To finalize your verification, please enter the code that has been sent to your email address / SMS</SmsInfo>
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderInput={(props) => <input {...props} />}
            />
            <Container>
                <Button>Send Code</Button>
            </Container>
            <EmailInfo>If you do not receive the confirmation message within a few minutes, please check your Spam or Bulk E-Mail folder</EmailInfo>
        </Form>
    )
}
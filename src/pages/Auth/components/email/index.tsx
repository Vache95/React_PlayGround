import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import TextInput from "@/components/TextInput";
import { email } from "@/utils/rules.ts";
import { EMAIL_MESSAGE } from "@/constants/validation.ts";
import Button from "@/commons/components/Button/index.tsx";
import { LoginThunk } from "@/store/Slices/auth/thunk.ts";
import { useAppDispatch } from "@/hooks/useDispatch.ts";
import { Container, Form } from "./style.ts";


type FormValues = {
    email: string
}


export const EmailComponent = () => {

    const navigate = useNavigate()
    const { control, handleSubmit } = useForm<FormValues>()
    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        dispatch(LoginThunk({ email: data?.email, languageID: 'en' }))
        navigate('/login/code')
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <TextInput
                placeholder='Enter your email'
                name='email'
                //@ts-expect-error
                control={control}
                rules={{
                    required: true,
                    pattern: {
                        value: email,
                        message: EMAIL_MESSAGE,
                    },
                }}
                label="Standard"
                variant="standard"
            />
            <Container>
                <Button>Submit</Button>
            </Container>
        </Form>
    )
}
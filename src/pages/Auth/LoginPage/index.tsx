import { Login, LoginTitle } from "./style.ts";
import { EmailComponent } from "../components/email";
import { Outlet, useLocation } from "react-router-dom";


export const LoginPage = () => {

    const { pathname } = useLocation()

    return (
        <Login>
            <LoginTitle>Login</LoginTitle>
            {pathname === '/login' && <EmailComponent />}
            <Outlet />
        </Login>
    )
}
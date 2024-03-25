import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { LoginPage } from "@/pages/Auth/LoginPage";
import { LoginPageLayout } from "@/layout/loginLayout";
import { CodeComponent } from "@/pages/Auth/components/code";
import RootErrorPage from "@/pages/RootErrorPage";
import DashBoardPage from "@/pages/Home/DashBoardPage";
import ProfilePage from "@/pages/Home/ProfilePage";
import SideBarLayout from "@/layout/sideBarLayout";
import NothFound from "@/pages/Erorr404";
import PrivateRoute from "@/hoc/private";
import PublicRoute from "@/hoc/public";
import { CODE, DASHBOARD, LOGINS, NOTFOUND, PROFILE } from "@/constants/url";



const routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route errorElement={<RootErrorPage />}>
                <Route element={<PrivateRoute />}>
                    <Route element={<SideBarLayout />}>
                        <Route index path={DASHBOARD} element={<DashBoardPage />} />
                        <Route path={PROFILE} element={<ProfilePage />} />
                    </Route>
                </Route>
                <Route element={<PublicRoute />}>
                    <Route element={<LoginPageLayout />} >
                        <Route path={LOGINS} element={<LoginPage />} >
                            <Route path={CODE} element={<CodeComponent />} />
                        </Route>
                    </Route>
                </Route>
                <Route path={NOTFOUND} element={<NothFound />} />
            </Route>
        </>
    )
);

export default routes;
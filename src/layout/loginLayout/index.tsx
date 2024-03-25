import {Layout,PlayGround,Title,Img} from "./style.ts";
import {Outlet} from "react-router-dom";
import playGround  from '@/commons/images/playGround.png'
import {FooterComponent} from "@/components/footer/footer.tsx";
export const LoginPageLayout = () => (
            <Layout>
                <PlayGround>
                    <Title>Playground</Title>
                    <Img src={playGround}/>
                </PlayGround>
                <Outlet/>
                <FooterComponent/>
            </Layout>
    )
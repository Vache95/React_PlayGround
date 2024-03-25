import { Outlet, useNavigate } from "react-router-dom";
import { Container, SideBar, Img } from "./styles";
import DashboardSVG from '@/commons/icons/Schedule_24px.svg'
import ProfileSVG from '@/commons/icons/perm_contact_calendar_24px.svg'

const SideBarLayout = () => {
  const navigate = useNavigate()

  return (
    <>
      <Container>
        <SideBar>
          <Img src={DashboardSVG} onClick={() => navigate('/dashboard')} alt="Schedule icon" />
          <Img src={ProfileSVG} onClick={() => navigate('/profile')} alt="profile" />
        </SideBar>
        <Outlet />
      </Container>
    </>
  );
};

export default SideBarLayout;
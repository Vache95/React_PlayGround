import { useNavigate } from 'react-router-dom';
import Button from '@/commons/components/Button';
import DashboardImg from '@/commons/images/DashboardImg.jpg'
import { DashboardContainer, Img, ComingSoon, ComingSoonTitle } from './styles';


const DashBoardPage = () => {
  const navigate = useNavigate()
  return (
    <DashboardContainer>
      <Img src={DashboardImg} alt="dashboardImg" />
      <ComingSoon>
        <ComingSoonTitle>COMING SOON</ComingSoonTitle>
        <Button width='300px' onClick={() => navigate('/profile')}>EDIT MY PROFILE AND MY WORKLOG</Button>
        <Button styles onClick={() => {
          //test
          localStorage.removeItem('token')
          navigate('/login')
        }}>LOGOUT</Button>
      </ComingSoon>
    </DashboardContainer>
  );
};

export default DashBoardPage;
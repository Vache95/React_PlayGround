import { selectSlice } from "@/store/Slices/auth/authSlices";
import { useAppSelector } from "./useSelector";

const useAuth = () => {
  const { accessToken } = useAppSelector(selectSlice)
  return !!accessToken;
};

export default useAuth;
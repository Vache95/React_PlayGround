import useAuth from "@/hooks/useAuth";
import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute: FC = () => {
  const auth: boolean = useAuth();
  return !auth ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default PublicRoute;
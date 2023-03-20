import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PublicRoute = ({ component }) => {
  const { isAuth } = useAuth();

  return !isAuth ? component : <Navigate to="/plan" />;
};

export default PublicRoute;

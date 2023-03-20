import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ component }) => {
  const { isAuth } = useAuth();

  return isAuth ? component : <Navigate to="/" />;
};

export default PrivateRoute;

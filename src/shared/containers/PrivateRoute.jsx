import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PrivateRoute = ({ component }) => {
  const { shouldRedirect } = useAuth();

  console.log("shouldRedirect", shouldRedirect);

  return shouldRedirect ? <Navigate to="/" /> : component;
};

export default PrivateRoute;

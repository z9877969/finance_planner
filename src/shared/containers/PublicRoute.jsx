import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectorIsAuth } from "../../redux/auth/authSelectors";

const PublicRoute = ({ component }) => {
  const isAuth = useSelector(selectorIsAuth);

  return isAuth ? <Navigate to="/plan" /> : component;
};

export default PublicRoute;

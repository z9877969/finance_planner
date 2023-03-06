import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectorIsAuth } from "../../redux/auth/authSelectors";

const PrivateRoute = ({ component }) => {
  const isAuth = useSelector(selectorIsAuth);

  return isAuth ? component : <Navigate to="/" />;
};

export default PrivateRoute;

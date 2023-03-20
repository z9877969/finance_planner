// import { useAuth } from "../../../../shared/hooks/useAuth";
import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";

const Navigation = ({ isAuth }) => {
  // const { isRefreshing } = useAuth();
  return isAuth ? <UserNav /> : <AuthNav />;
};

export default Navigation;

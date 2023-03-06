import AuthNav from "../AuthNav/AuthNav";
import UserNav from "../UserNav/UserNav";

const Navigation = ({ isAuth }) => {
  return isAuth ? <UserNav /> : <AuthNav />;
};

export default Navigation;

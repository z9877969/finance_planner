import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.scss";

const AuthNav = () => {
  return (
    <nav className={s.wrapper}>
      <NavLink className={s.btn_login} to={"/login"}>
        Log In
      </NavLink>
      <NavLink className={s.btn_register} to={"/register"}>
        Register
      </NavLink>
    </nav>
  );
};

export default AuthNav;

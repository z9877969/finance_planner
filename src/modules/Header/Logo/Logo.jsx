import logo from "../../../assets/icons/logo.svg";
import s from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={s.wrapper}>
      <img src={logo} alt="logo" className={s.logo} />
      <span className={s.text}>Finance</span>
    </div>
  );
};

export default Logo;

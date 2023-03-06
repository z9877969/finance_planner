import { useSelector } from "react-redux";
import { selectorUserName } from "../../../../redux/auth/authSelectors";
// import sprite from "../../../../assets/icons/sprite.svg";
import logOutIcon from "../../icons/log-out.svg";
import s from "./UserBar.module.scss";

const UserBar = () => {
  const userName = useSelector(selectorUserName);

  return (
    <div className={s.wrapper}>
      <p className={s.avatar}>{userName[0].toUpperCase()}</p>
      <p className={s.nickName}>{userName}</p>
      <button className={s.btnLogout} type="button">
        <span>Log out</span>
        <img src={logOutIcon} alt="log Out Icon" />
        {/* <svg>
          <use href={sprite + "#icon-log-out"}></use>
        </svg> */}
      </button>
    </div>
  );
};

export default UserBar;

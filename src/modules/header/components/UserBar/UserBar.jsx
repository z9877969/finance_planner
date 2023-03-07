import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../../redux/auth/authOperations";
import { selectorUserName } from "../../../../redux/auth/authSelectors";
import logOutIcon from "../../icons/log-out.svg";
import s from "./UserBar.module.scss";

const UserBar = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectorUserName);

  return (
    <div className={s.wrapper}>
      <p className={s.avatar}>{userName[0]?.toUpperCase()}</p>
      <p className={s.nickName}>{userName}</p>
      <button
        className={s.btnLogout}
        type="button"
        onClick={() => dispatch(logoutUser())}
      >
        <span>Log out</span>
        <img src={logOutIcon} alt="log Out Icon" />
      </button>
    </div>
  );
};

export default UserBar;

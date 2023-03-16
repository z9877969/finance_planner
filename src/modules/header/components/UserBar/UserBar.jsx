import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../../../redux/auth/authOperations";
import { selectorUserName } from "../../../../redux/auth/authSelectors";
import { logOutIcon, statsLinkIcon } from "../../icons";
import s from "./UserBar.module.scss";

const UserBar = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectorUserName);

  return (
    <div className={s.wrapper}>
      <Link className={s.statsLink} to={"/statistics/transactions"}>
        <img src={statsLinkIcon} alt="" />
      </Link>
      <p className={s.avatar}>{userName[0]?.toUpperCase()}</p>
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

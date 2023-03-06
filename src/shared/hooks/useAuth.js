import { useSelector } from "react-redux";
import {
  selectorIsAuth,
  selectorUserName,
} from "../../redux/auth/authSelectors";

export const useAuth = () => {
  const isAuth = useSelector(selectorIsAuth);
  const userName = useSelector(selectorUserName);

  return { isAuth, userName };
};

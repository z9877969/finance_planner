import { useSelector } from "react-redux";
import {
  selectorIsAuth,
  selectorIsRefreshing,
  selectorIsUserExist,
  selectorUserName,
} from "../../redux/auth/authSelectors";

export const useAuth = () => {
  const isAuth = useSelector(selectorIsAuth);
  const userName = useSelector(selectorUserName);
  const isUserExist = useSelector(selectorIsUserExist);

  const isRefreshing = useSelector(selectorIsRefreshing);

  const shouldRedirect = !isAuth && !isRefreshing;

  return { isAuth, userName, shouldRedirect, isRefreshing, isUserExist };
};

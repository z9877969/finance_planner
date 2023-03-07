import { useSelector } from "react-redux";
import Container from "../../../shared/components/Container/Container";
import Navigation from "./Navigation/Navigation";
import UserBar from "./UserBar/UserBar";
import { selectorIsAuth } from "../../../redux/auth/authSelectors";

import s from "./Header.module.scss";
import Logo from "./Logo/Logo";

const Header = () => {
  const isAuth = useSelector(selectorIsAuth);
  return (
    <header className={s.header}>
      <Container className={s.containerFlex}>
        {!isAuth && <Logo />}
        <Navigation isAuth={isAuth} />
        {isAuth && (
          <>
            <Logo />
            <UserBar />
          </>
        )}
      </Container>
    </header>
  );
};

export default Header;

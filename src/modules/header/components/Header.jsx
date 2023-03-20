import Container from "shared/components/Container/Container";
import Navigation from "./Navigation/Navigation";
import UserBar from "./UserBar/UserBar";
import Logo from "./Logo/Logo";
import s from "./Header.module.scss";
import { useAuth } from "shared/hooks/useAuth";

const Header = () => {
  const { isAuth } = useAuth();
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

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { BgContainer } from "modules/homePage";
import { resetIsRefreshing } from "redux/auth/authSlice";
import { Container, Section } from "shared/components";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    dispatch(resetIsRefreshing());

    return () => {
      document.body.style = {};
    };
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <BgContainer />
        <Outlet />
      </Container>
    </Section>
  );
};

export default HomePage;

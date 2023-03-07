import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { BgContainer } from "../modules/homePage";
import { Container, Section } from "../shared/components";

const HomePage = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style = {};
    };
  });

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

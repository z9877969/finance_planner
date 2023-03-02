import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import BgContainer from "../modules/MainPage/BgContainer/BgContainer";
import Container from "../shared/components/Container/Container";
import Modal from "../shared/components/Modal/Modal";
import Section from "../shared/components/Section/Section";

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
        <BgContainer></BgContainer>
        <Outlet />
      </Container>
    </Section>
  );
};

export default HomePage;

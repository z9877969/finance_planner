import { Section, Container } from "../";
import s from "./PageWrapper.module.scss";

const PageWrapper = ({ children }) => {
  return (
    <Section>
      <Container>
        <div className={s.wrapper}>{children}</div>;
      </Container>
    </Section>
  );
};

export default PageWrapper;

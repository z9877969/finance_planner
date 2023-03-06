import { InputsList, OwnPlanWrapper, ResultForm } from "../modules/OwnPlanPage";
import Container from "../shared/components/Container/Container";
import Section from "../shared/components/Section/Section";

const OwnPlanPage = () => {
  return (
    <Section>
      <Container>
        <OwnPlanWrapper>
          <InputsList />
          <ResultForm />
        </OwnPlanWrapper>
      </Container>
    </Section>
  );
};

export default OwnPlanPage;

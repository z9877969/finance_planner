import {
  InputsList,
  resultFormOptions as options,
} from "../modules/OwnPlanPage";
import {
  Container,
  Section,
  PageWrapper,
  ResultForm,
} from "../shared/components";

const OwnPlanPage = () => {
  return (
    <Section>
      <Container>
        <PageWrapper>
          <InputsList />
          <ResultForm
            title="You will have an apartment in:"
            options={options}
          />
        </PageWrapper>
      </Container>
    </Section>
  );
};

export default OwnPlanPage;

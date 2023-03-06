import { InputsList } from "../modules/OwnPlanPage";
import {
  Container,
  Section,
  PageWrapper,
  ResultForm,
} from "../shared/components";
import { options } from "../modules/OwnPlanPage";

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

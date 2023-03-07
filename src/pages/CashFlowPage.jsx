import {
  InputsList,
  resultFormOptions as options,
} from "../modules/CashFlowPage";
import {
  PageWrapper,
  Container,
  Section,
  ResultForm,
} from "../shared/components";

const CashFlowPage = () => {
  return (
    <Section>
      <Container>
        <PageWrapper>
          <InputsList />
          <ResultForm labelPosition="under" options={options} />
        </PageWrapper>
      </Container>
    </Section>
  );
};

export default CashFlowPage;

import { InputsList } from "../modules/CashFlowPage";
import {
  PageWrapper,
  Container,
  Section,
  ResultForm,
} from "../shared/components";

const options = [
  {
    name: "dairyLimit",
    title: "Daily limit",
  },
  {
    name: "monthLimit",
    title: "Deviation from the planned accumulation amount",
  },
];

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

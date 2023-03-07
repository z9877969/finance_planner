import {
  InputsList,
  resultFormOptions as options,
} from "../modules/cashFlowPage";
import { PageWrapper, ResultForm } from "../shared/components";

const CashFlowPage = () => {
  return (
    <PageWrapper>
      <InputsList />
      <ResultForm labelPosition="under" options={options} />
    </PageWrapper>
  );
};

export default CashFlowPage;

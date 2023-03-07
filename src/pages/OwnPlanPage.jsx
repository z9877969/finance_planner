import {
  InputsList,
  resultFormOptions as options,
} from "../modules/ownPlanPage";
import { PageWrapper, ResultForm } from "../shared/components";

const OwnPlanPage = () => {
  return (
    <PageWrapper>
      <InputsList />
      <ResultForm title="You will have an apartment in:" options={options} />
    </PageWrapper>
  );
};

export default OwnPlanPage;

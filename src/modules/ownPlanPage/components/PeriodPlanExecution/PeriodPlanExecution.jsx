import { useSelector } from "react-redux";
import { selectorAccumPeriod } from "../../../../redux/plan/planSelectors";
import { ResultPanel } from "../../../../shared/components";
import { resultFormOptions as options } from "../../data/resultFormOptions";

const PeriodPlanExecution = () => {
  const accumulationPeriod = useSelector(selectorAccumPeriod);

  return (
    <ResultPanel
      title="You will have an apartment in:"
      options={options}
      data={accumulationPeriod}
    />
  );
};

export default PeriodPlanExecution;

import { useSelector } from "react-redux";
import { selectorAccumPeriod } from "redux/plan/planSelectors";
import { ResultPanel } from "shared/components";
import { resultFormOptions as options } from "../../data/resultFormOptions";
import s from "./PeriodPlanExecution.module.scss";

const PeriodPlanExecution = ({ openModalAddBalance }) => {
  const accumulationPeriod = useSelector(selectorAccumPeriod);

  return (
    <ResultPanel
      title="You will have an apartment in:"
      options={options}
      data={accumulationPeriod}
    >
      <button
        type="button"
        className={s.btnAddBalance}
        onClick={openModalAddBalance}
      >
        Add balance
      </button>
    </ResultPanel>
  );
};

export default PeriodPlanExecution;

import { useSelector } from "react-redux";
import { ResultPanel } from "shared/components";
import { resultFormOptions as options } from "../../";
import { selectorCashflowLimits } from "redux/cashflow/cashflowSelectors";
import s from "./ExpensesLimits.module.scss";

const ExpenssesLimits = ({ openModal }) => {
  const cashflowLimits = useSelector(selectorCashflowLimits);
  return (
    <ResultPanel labelPosition="under" options={options} data={cashflowLimits}>
      <button className={s.btn} type="button" onClick={openModal}>
        Add income
      </button>
    </ResultPanel>
  );
};

export default ExpenssesLimits;

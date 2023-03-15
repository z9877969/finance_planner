import { ResultPanel } from "../../../../shared/components";
import { resultFormOptions as options } from "../../";
import s from "./ExpensesLimits.module.scss";
import { useSelector } from "react-redux";

const ExpenssesLimits = ({ openModal }) => {
  const cashflowLimits = useSelector((state) => state.cashflow);
  return (
    <ResultPanel labelPosition="under" options={options} data={cashflowLimits}>
      <button className={s.btn} type="button" onClick={openModal}>
        Add income
      </button>
    </ResultPanel>
  );
};

export default ExpenssesLimits;

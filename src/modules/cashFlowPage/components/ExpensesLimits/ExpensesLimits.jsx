import { ResultPanel } from "../../../../shared/components";
import { resultFormOptions as options } from "../../";
import s from "./ExpensesLimits.module.scss";

const ExpenssesLimits = ({ openModal }) => {
  return (
    <ResultPanel labelPosition="under" options={options}>
      <button className={s.btn} type="button" onClick={openModal}>
        Add income
      </button>
    </ResultPanel>
  );
};

export default ExpenssesLimits;

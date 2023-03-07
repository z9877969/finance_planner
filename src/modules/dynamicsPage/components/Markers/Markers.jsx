import clsx from "clsx";
import s from "./Markers.module.scss";

const Markers = () => {
  return (
    <ul className={s.list}>
      <li className={clsx(s.item, s.accum)}>Accumulated</li>
      <li className={clsx(s.item, s.expense)}>Expenses</li>
      <li className={clsx(s.item, s.income)}>Income</li>
    </ul>
  );
};

export default Markers;

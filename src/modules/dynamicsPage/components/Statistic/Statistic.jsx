import { useCallback, useState } from "react";
import s from "./Statistic.module.scss";
import { hryvna } from "assets/icons";
import PeriodSelect from "../PeriodSelect/PeriodSelect";

const options = [
  {
    name: "income",
    title: "Income",
    afterTitle: "uah",
  },
  {
    name: "expense",
    title: "Expenses",
    afterTitle: "uah",
  },
  {
    name: "accum",
    title: "Accumulated",
    afterTitle: "uah",
  },
  {
    name: "planAmount",
    title: "Plan",
    afterTitle: "uah",
  },
  {
    name: "planProcent",
    title: "Plan",
    afterTitle: "procent",
  },
];

const initialState = {
  income: 60000,
  expense: 30000,
  accum: 30000,
  planAmount: 45000,
  planProcent: 70,
};

const separateValue = (value) => {
  const valueStr = value.toString();
  if (valueStr.length <= 3) return valueStr;
  return valueStr
    .split("")
    .reverse()
    .reduce((acc, el, i) => {
      if (i !== 0 && i % 3 === 0) {
        acc.unshift(el + " ");
      } else {
        acc.unshift(el);
      }
      return acc;
    }, [])
    .join("");
};

const Statistic = () => {
  const [monthStatistic, setMonthStatistic] = useState(initialState);

  const getMonthStatistic = useCallback((month) => {
    console.log("month :>> ", month);
    // const stats = await fetch();
    const stats = initialState;
    setMonthStatistic(stats);
  }, []);

  return (
    <div className={s.wrapper}>
      <PeriodSelect setValue={getMonthStatistic} />
      <ul className={s.list}>
        {options.map((el) => (
          <li key={el.name} className={s.item}>
            <p className={s.title}>
              {el.title},{" "}
              {el.afterTitle === "uah" ? (
                <img src={hryvna} alt="icon-hryvna" />
              ) : (
                "%"
              )}
            </p>
            <p className={s.amount}>{separateValue(monthStatistic[el.name])}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistic;

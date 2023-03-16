import { useState } from "react";
import ListWrapper from "../ListWrapper/ListWrapper";
import { transactions as defaultTransactions } from "../../data/transactions";
import s from "./ExpensesList.module.scss";
import { pencil, trash } from "../../icons";

const ExpensesList = () => {
  const [transactions] = useState(defaultTransactions);

  return (
    <ListWrapper className={s.list}>
      {transactions.map((el) => (
        <li key={el.id} className={s.item}>
          <div className={s.descrWrapper}>
            <p className={s.mainDescr}>
              <span className={s.date}>12.09.2020</span>
              <span className={s.comment}>Cat food</span>
            </p>
            <p className={s.sum}>
              <span className={s.amount}>200</span>
              <span className={s.currency}>UAH</span>
            </p>
          </div>
          <p className={s.category}>House</p>
          <div className={s.btnsWrapper}>
            <button type="button" className={s.btnEdit}>
              <img src={pencil} alt="" />
            </button>
            <button type="button" className={s.btnRemove}>
              <img src={trash} alt="" />
            </button>
          </div>
        </li>
      ))}
    </ListWrapper>
  );
};

export default ExpensesList;

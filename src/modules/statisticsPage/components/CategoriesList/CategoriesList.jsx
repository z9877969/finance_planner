import { useState } from "react";
import ListWrapper from "../ListWrapper/ListWrapper";
import { categories as categoriesList } from "../../data/categories";
import s from "./CategoriesList.module.scss";

const CategoriesList = () => {
  const [categories] = useState(categoriesList);

  return (
    <ListWrapper>
      {categories.map((el) => (
        <li key={el.category} className={s.item}>
          <div className={s.descrWrapper}>
            <p className={s.category}>{el.category}</p>
            <p className={s.sum}>
              <span className={s.amount}>-{el.sum}</span>{" "}
              <span className={s.currency}>{el.currency}</span>
            </p>
          </div>
          <p className={s.procent}>{el.procent}%</p>
        </li>
      ))}
    </ListWrapper>
  );
};

export default CategoriesList;

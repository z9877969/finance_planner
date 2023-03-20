import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListWrapper from "../ListWrapper/ListWrapper";
import { getCategoriesStatApi } from "utils/api/onrenderApi";
import { getPeriodDate } from "modules/statisticsPage/helpers/getPeriodDate";
import { finishLoader, startLoader } from "redux/loading/loadingSlice";
import s from "./CategoriesList.module.scss";
import { selectorIsUserExist } from "redux/auth/authSelectors";

const CategoriesList = ({ date, categoriesMap }) => {
  const dispatch = useDispatch();
  const isUserExist = useSelector(selectorIsUserExist);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!isUserExist) return;
    const getCategoriesStats = async () => {
      const periodDate = getPeriodDate(date);
      dispatch(startLoader());
      try {
        const categories = await getCategoriesStatApi(periodDate);
        setCategories(categories);
      } catch (error) {
        console.error(error.message);
      } finally {
        dispatch(finishLoader());
      }
    };
    getCategoriesStats();
  }, [date, dispatch, isUserExist]);

  return (
    <ListWrapper>
      {categories.map((el) => (
        <li key={el.category} className={s.item}>
          <div className={s.descrWrapper}>
            <p className={s.category}>{categoriesMap[el.category]}</p>
            <p className={s.sum}>
              <span className={s.amount}>-{el.amount}</span>{" "}
              <span className={s.currency}>UAH</span>
            </p>
          </div>
          <p className={s.procent}>{el.percentage}</p>
        </li>
      ))}
    </ListWrapper>
  );
};

export default CategoriesList;

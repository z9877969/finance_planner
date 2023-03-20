import { useEffect, useMemo, useState } from "react";
import ListWrapper from "../ListWrapper/ListWrapper";
import { transactions as defaultTransactions } from "../../data/transactions";
import s from "./ExpensesList.module.scss";
import { pencil, trash } from "../../icons";
import ModalEditTransaction from "../ModalEditTransaction/ModalEditTransaction";
import { getTransactionsApi } from "../../../../utils/api/onrenderApi";
import useCategories from "../../../../shared/hooks/useCategories";
import { useDispatch, useSelector } from "react-redux";
import {
  finishLoader,
  startLoader,
} from "../../../../redux/loading/loadingSlice";
import { selectorIsUserExist } from "../../../../redux/auth/authSelectors";
import { selectorCategories } from "../../../../redux/categories/categoriesSelector";

const getPeriodDate = (date) => {
  return { month: date.getMonth() + 1, year: date.getFullYear() };
};

const formatDate = (date) => {
  const cutedDate = date.split("T")[0];
  return cutedDate
    .split("-")
    .reduce((acc, el) => {
      acc.unshift(el);
      return acc;
    }, [])
    .join("-");
};

const ExpensesList = ({ date }) => {
  const dispatch = useDispatch();

  useCategories();

  const [transactions, setTransactions] = useState([]);
  const [editedTransaction, setEditedTransaction] = useState(null);

  const isUserExist = useSelector(selectorIsUserExist);
  const categories = useSelector(selectorCategories);
  
  const categoriesMap = useMemo(() => {
    return categories.reduce((acc, el) => {
      acc[el.name] = el.title;
      return acc;
    }, {});
  }, [categories]);

  const toggleEditedModal = (transaction = null) => {
    setEditedTransaction(transaction);
  };

  useEffect(() => {
    const periodDate = getPeriodDate(date);
    if (!isUserExist) return;
    const getTransactions = async () => {
      dispatch(startLoader());
      try {
        const newTransactions = await getTransactionsApi({
          ...periodDate,
          month: periodDate.month,
        });
        setTransactions(newTransactions);
      } catch (error) {
        console.error(error.message);
      } finally {
        dispatch(finishLoader());
      }
    };
    getTransactions();
  }, [date, isUserExist, dispatch]);

  return (
    <>
      <ListWrapper className={s.list}>
        {transactions.length > 0 ? (
          transactions.map((el) => (
            <li key={el._id} className={s.item}>
              <div className={s.descrWrapper}>
                <p className={s.mainDescr}>
                  <span className={s.date}>{formatDate(el.date)}</span>
                  <span className={s.comment}>{el.comment}</span>
                </p>
                <p className={s.sum}>
                  <span className={s.amount}>{el.sum}</span>
                  <span className={s.currency}>{el.currency}</span>
                </p>
              </div>
              <p className={s.category}>{categoriesMap[el.category]}</p>
              <div className={s.btnsWrapper}>
                <button
                  type="button"
                  className={s.btnEdit}
                  onClick={() => toggleEditedModal(el)}
                >
                  <img src={pencil} alt="" />
                </button>
                <button type="button" className={s.btnRemove}>
                  <img src={trash} alt="" />
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className={s.item}>
            <h2>Transactions are not exist</h2>
          </li>
        )}
      </ListWrapper>
      {editedTransaction && (
        <ModalEditTransaction
          closeModal={toggleEditedModal}
          dataForm={editedTransaction}
          setTransactions={setTransactions}
        />
      )}
    </>
  );
};

export default ExpensesList;

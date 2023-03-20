import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListWrapper from "../ListWrapper/ListWrapper";
import ModalEditTransaction from "../ModalEditTransaction/ModalEditTransaction";
import { pencil, trash } from "../../icons";
import {
  getTransactionsApi,
  removeTransactionApi,
} from "utils/api/onrenderApi";
import { finishLoader, startLoader } from "redux/loading/loadingSlice";
import { selectorIsUserExist } from "redux/auth/authSelectors";
import s from "./ExpensesList.module.scss";
import { getPeriodDate } from "modules/statisticsPage/helpers/getPeriodDate";
import { formatDate } from "modules/statisticsPage/helpers/formatDate";

const ExpensesList = ({ date, categoriesMap }) => {
  const dispatch = useDispatch();

  const [transactions, setTransactions] = useState([]);
  const [editedTransaction, setEditedTransaction] = useState(null);

  const isUserExist = useSelector(selectorIsUserExist);

  const toggleEditedModal = (transaction = null) => {
    setEditedTransaction(transaction);
  };

  const handleRemoveTransaction = async (id) => {
    dispatch(startLoader());
    try {
      await removeTransactionApi(id);
      setTransactions((t) => t.filter(({ _id }) => _id !== id));
    } catch (error) {
      console.error(error.message);
    } finally {
      dispatch(finishLoader());
    }
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
                <button
                  type="button"
                  className={s.btnRemove}
                  onClick={() => handleRemoveTransaction(el._id)}
                >
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

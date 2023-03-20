import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, InputsListItem } from "shared/components";
import { CategorySelect } from "modules/cashFlowPage";
import { selectorCategories } from "redux/categories/categoriesSelector";
import { finishLoader, startLoader } from "redux/loading/loadingSlice";
import { setBalance } from "redux/auth/authSlice";
import { editTransactionApi } from "utils/api/onrenderApi";
import s from "./ModalEditTransaction.module.scss";

const ModalEditTransaction = ({ closeModal, dataForm, setTransactions }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectorCategories);
  const [editedForm, setEditedForm] = useState(dataForm);

  const initialValue = useMemo(
    () => {
      const { name, title } = categories.find(
        (el) => el.name === editedForm.category
      );
      return { label: title, value: name };
    },
    // eslint-disable-next-line
    []
  );

  const setCategory = (category) => {
    setEditedForm((p) => ({ ...p, category }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { type, category, comment, sum, _id: id } = editedForm;
    const transaction = {
      type,
      category,
      comment: comment,
      sum: Number(sum),
    };
    console.log("transaction :>> ", transaction);
    dispatch(startLoader());
    try {
      const editedTransaction = await editTransactionApi({ transaction, id });
      const { type, category, comment, sum, newBalance } = editedTransaction;
      setTransactions((t) =>
        t.map((el) =>
          el._id === id ? { ...el, type, category, comment, sum } : el
        )
      );
      dispatch(setBalance(newBalance));
      closeModal();
    } catch (error) {
      console.error(error.message);
    } finally {
      dispatch(finishLoader());
    }
  };

  return (
    <Modal closeModal={closeModal}>
      <form className={s.wrapper} onSubmit={handleSubmit}>
        <InputsListItem title={"Per category"}>
          <CategorySelect setValue={setCategory} initialValue={initialValue} />
        </InputsListItem>
        <InputsListItem
          name="comment"
          value={editedForm.comment}
          title="Expense comment"
          placeholder={"Enter comment"}
          onChange={handleChange}
        />
        <InputsListItem
          name="sum"
          value={editedForm.sum}
          title="Sum"
          placeholder={"00.00"}
          onChange={handleChange}
        />
        <button className={s.btnSubmit} type="submit">
          Edit
        </button>
      </form>
    </Modal>
  );
};

export default ModalEditTransaction;

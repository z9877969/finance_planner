import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorBalance } from "../../../../redux/auth/authSelectors";
import { addTransaction } from "../../../../redux/cashflow/cashflowOperations";
import { Form, Modal } from "../../../../shared/components";
import { modalAddIncomeOptions as options } from "../../data/modalAddIncomeOptions";
import { incomeInitialState } from "../../data/transactionInitialState";
import s from "./ModalAddIncome.module.scss";

const ModalAddIncome = ({ closeModal }) => {
  const d = useDispatch();
  const balance = useSelector(selectorBalance);

  const balanceRef = useRef(null);

  const handleSubmit = (dataForm) => {
    d(addTransaction({ type: "income", sum: Number(dataForm.income) }));
  };

  useEffect(() => {
    if (balanceRef.current !== null && balanceRef.current !== balance) {
      closeModal();
    }

    if (balanceRef.current === null) {
      balanceRef.current = balance;
    }
  }, [balance, closeModal]);

  return (
    <Modal closeModal={closeModal}>
      <Form
        options={options}
        initialValue={incomeInitialState}
        btnTitle="Add"
        onSubmit={handleSubmit}
      >
        <button className={s.btnCancel} type="button" onClick={closeModal}>
          Cancel
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddIncome;

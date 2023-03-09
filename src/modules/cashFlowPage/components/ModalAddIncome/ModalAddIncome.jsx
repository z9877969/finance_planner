import { Form, Modal } from "../../../../shared/components";
import { modalAddIncomeOptions as options } from "../../data/modalAddIncomeOptions";
import s from "./ModalAddIncome.module.scss";

const initialValues = {
  income: "",
};

const ModalAddIncome = ({ closeModal }) => {
  const handleSubmit = (dataForm) => {
    console.log({ type: "income", sum: dataForm.income });
  };

  return (
    <Modal closeModal={closeModal}>
      <Form
        options={options}
        initialValue={initialValues}
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

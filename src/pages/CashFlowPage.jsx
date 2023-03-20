import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  ExpensesLimits,
  ModalAddIncome,
  TransactionDataList,
} from "../modules/cashFlowPage";
// import { selectorBalance } from "../redux/auth/authSelectors";
import {
  addTransaction,
  getCashflowLimits,
} from "../redux/cashflow/cashflowOperations";
import { PageWrapper } from "../shared/components";
// import { setNewDate, setNewDateWithBalance } from "../shared/helpers/calcBalanceWithDate";
import { useAuth } from "../shared/hooks/useAuth";

const CashFlowPage = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataForm, setDataForm] = useState(null);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const { isUserExist } = useAuth();

  const toggleModal = useCallback(() => {
    setIsModalOpen((p) => !p);
  }, []);

  const openModal = (e) => {
    e.target.blur();
    toggleModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmiting(true);
  };

  useEffect(() => {
    isUserExist && dispatch(getCashflowLimits());
  }, [dispatch, isUserExist]);

  useEffect(() => {
    dataForm && isSubmiting && dispatch(addTransaction(dataForm));
    dataForm && setIsSubmiting(false);
    // eslint-disable-next-line
  }, [dataForm, dispatch]);

  return (
    <>
      <PageWrapper>
        <form onSubmit={handleSubmit}>
          <TransactionDataList
            setData={setDataForm}
            isSubmiting={isSubmiting}
          />
          <ExpensesLimits openModal={openModal} />
        </form>
      </PageWrapper>
      {isModalOpen && <ModalAddIncome closeModal={toggleModal} />}
    </>
  );
};

export default CashFlowPage;

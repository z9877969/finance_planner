import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  ExpensesLimits,
  ModalAddIncome,
  TransactionDataList,
} from "../modules/cashFlowPage";
import {
  addTransaction,
  getCashflowLimits,
} from "../redux/cashflow/cashflowOperations";
import { PageWrapper } from "../shared/components";
import { setNewDate } from "../shared/helpers/date";
import { useAuth } from "../shared/hooks/useAuth";

const CashFlowPage = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataForm, setDataForm] = useState(null);
  const [isParrentUpdate, setIsParrentUpdate] = useState(false);
  const { isAuth } = useAuth();

  const toggleModal = useCallback(() => {
    setIsModalOpen((p) => !p);
  }, []);

  const openModal = (e) => {
    e.target.blur();
    toggleModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsParrentUpdate((p) => !p);
  };

  useEffect(() => {
    isAuth && dispatch(getCashflowLimits());
  }, [dispatch, isAuth]);

  useEffect(() => {
    setNewDate();
    dispatch(addTransaction(dataForm));
  }, [dataForm, dispatch]);

  return (
    <>
      <PageWrapper>
        <form onSubmit={handleSubmit}>
          <TransactionDataList
            setData={setDataForm}
            isParentUpdate={isParrentUpdate}
          />
          <ExpensesLimits openModal={openModal} />
        </form>
      </PageWrapper>
      {isModalOpen && <ModalAddIncome closeModal={toggleModal} />}
    </>
  );
};

export default CashFlowPage;

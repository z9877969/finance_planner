import { useState } from "react";
import {
  ExpensesLimits,
  ModalAddIncome,
  TransactionDataList,
} from "../modules/cashFlowPage";
import { PageWrapper } from "../shared/components";

const CashFlowPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((p) => !p);
  };

  return (
    <>
      <PageWrapper>
        <form>
          <TransactionDataList />
          <ExpensesLimits openModal={toggleModal} />
        </form>
      </PageWrapper>
      {isModalOpen && <ModalAddIncome closeModal={toggleModal} />}
    </>
  );
};

export default CashFlowPage;

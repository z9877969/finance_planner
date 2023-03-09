import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PeriodPlanExecution, PlanInputsList } from "../modules/ownPlanPage";
import ModalAddBalance from "../modules/ownPlanPage/components/ModalAddBalance/ModalAddBalance";
import { PageWrapper } from "../shared/components";
import { useAuth } from "../shared/hooks/useAuth";
import { selectorIsExistBalance } from "../redux/auth/authSelectors";
import { addPlan, editPlan, getPlan } from "../redux/plan/planOperations";
import { selectorPlanData } from "../redux/plan/planSelectors";

const OwnPlanPage = () => {
  const dispatch = useDispatch();
  const isExistBalance = useSelector(selectorIsExistBalance);
  const newPlanData = useSelector(selectorPlanData);
  const { isAuth } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((p) => !p);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    !newPlanData.id ? dispatch(addPlan(newPlanData)) : console.log("EDIT PLAN"); // dispatch(editPlan(newPlanData));
  };

  useEffect(() => {
    !isExistBalance && toggleModal();
  }, [isExistBalance]);

  useEffect(() => {
    isAuth && dispatch(getPlan());
  }, [dispatch, isAuth]);

  return (
    <>
      <PageWrapper>
        <form onSubmit={handleSubmit}>
          <PlanInputsList />
          <PeriodPlanExecution />
        </form>
        {isModalOpen && <ModalAddBalance closeModal={toggleModal} />}
      </PageWrapper>
    </>
  );
};

export default OwnPlanPage;

import { useCallback } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { selectorPlanData } from "../../redux/plan/planSelectors";

export const useCheckPlan = () => {
  const planData = useSelector(selectorPlanData);

  const handleCheckPlan = useCallback(
    (e) => {
      if (!planData) {
        e.preventDefault();
        toast.warn("Enter plan data");
      }
    },
    [planData]
  );

  return handleCheckPlan;
};

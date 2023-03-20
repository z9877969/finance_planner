import { useCallback } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { selectorPlanData } from "redux/plan/planSelectors";

export const useCheckPlan = () => {
  const planData = useSelector(selectorPlanData);
  const { pathname } = useLocation();

  const handleCheckPlan = useCallback(
    (e) => {
      if (!planData) {
        if (pathname !== "/plan") return;
        e.preventDefault();
        toast.warn("Enter plan data");
      }
    },
    [planData, pathname]
  );

  return handleCheckPlan;
};

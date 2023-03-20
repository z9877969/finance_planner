import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectorPlanData } from "../../../../redux/plan/planSelectors";
import InputsListItem from "../../../../shared/components/InputsListItem/InputsListItem";
import { inputsListOptions as options } from "../../data/inputsListOptions";
import { initialPlanDataState } from "../../data/initialPlanDataState";
import { createPrePlan } from "../../../../redux/plan/planOperations";
import s from "./PlanInputsList.module.scss";

const PlanInputsList = () => {
  const dispatch = useDispatch();
  const curPlanData = useSelector(selectorPlanData);
  const [newPlanData, setNewPlanData] = useState(
    curPlanData ? curPlanData : initialPlanDataState
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPlanData((p) => ({
      ...p,
      [name]: value === "" ? value : Number(value),
    }));
  };

  const handleBlur = (e) => {
    if (Object.values(newPlanData).filter((el) => el === "").length) return;
    if (JSON.stringify(curPlanData) === JSON.stringify(newPlanData)) return;
    dispatch(createPrePlan(newPlanData));
  };

  useEffect(() => {
    curPlanData && setNewPlanData(curPlanData);
  }, [curPlanData]);

  return (
    <ul className={s.list}>
      {options.map((el, i) => (
        <InputsListItem
          key={el.name}
          num={i + 1}
          {...el}
          value={newPlanData[el.name]}
          onChange={handleChange}
          disabled={el.name === "savings" && curPlanData?.id}
          onBlur={handleBlur}
        />
      ))}
    </ul>
  );
};

export default PlanInputsList;

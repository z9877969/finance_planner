import s from "./OwnPlanWrapper.module.scss";

const OwnPlanWrapper = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};

export default OwnPlanWrapper;

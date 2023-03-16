import s from "./ToolBarWrapper.module.scss";

const ToolBarWrapper = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};

export default ToolBarWrapper;

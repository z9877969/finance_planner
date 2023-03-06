import s from "./PageWrapper.module.scss";

const PageWrapper = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};

export default PageWrapper;

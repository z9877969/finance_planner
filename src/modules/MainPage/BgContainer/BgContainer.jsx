import s from "./BgContainer.module.scss";

const BgContainer = ({ children }) => {
  return (
    <>
      <div className={s.l_circle}>
        <div className={s.s_circle}>
          <div className={s.img_boy}></div>
        </div>
      </div>
      {children}
    </>
  );
};

export default BgContainer;

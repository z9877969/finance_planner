import s from "./InputsListItem.module.scss";

const InputsListItem = ({
  num,
  title,
  type = "text",
  component: Component = null,
  descr,
  children,
}) => {
  return (
    <li className={s.item}>
      {children ? children : <input className={s.input} type={type} />}

      <label className={s.label}>
        <h3 className={s.title}>
          {num && <span className={s.titleFirst}>{num}.</span>}
          <span className={s.titleSecond}>{title}</span>
        </h3>
      </label>

      {Component && <Component className={s.select} />}
      {descr && <p className={s.descr}>{descr}</p>}
    </li>
  );
};

export default InputsListItem;

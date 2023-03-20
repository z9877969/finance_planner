import clsx from "clsx";
import s from "./ResultPanel.module.scss";

const ResultPanel = ({
  title,
  labelPosition = "over",
  options,
  data = {},
  children,
}) => {
  return (
    <div className={s.wrapper}>
      {title && <h3 className={s.title}>{title}</h3>}
      <div className={s.form}>
        {options.fields.map(({ type = "text", ...el }) => (
          <label
            key={el.name}
            className={clsx(s.label, labelPosition === "under" && s.under)}
          >
            <p className={s.labelTitle}>{el.title}</p>
            <input
              className={s.input}
              type={type}
              name={el.name}
              value={data[el.name] === null ? "" : data[el.name]}
              disabled
            />
          </label>
        ))}
        <div
          className={clsx(
            s.btnWrapper,
            labelPosition === "over" && s.btnReverse
          )}
        >
          <button
            className={clsx(s.btnSubmit, labelPosition === "under" && s.under)}
            type="submit"
          >
            {options.btnSubmit}
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ResultPanel;

import clsx from "clsx";
import s from "./ResultForm.module.scss";

const ResultForm = ({ title, labelPosition = "over", options, form = {} }) => {
  return (
    <div className={s.wrapper}>
      {title && <h3 className={s.title}>{title}</h3>}
      <form className={s.form}>
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
              value={form[el.name]}
            />
          </label>
        ))}
        <button
          className={clsx(s.btnSubmit, labelPosition === "under" && s.under)}
          type="submit"
        >
          {options.btnSubmit}
        </button>
      </form>
    </div>
  );
};

export default ResultForm;

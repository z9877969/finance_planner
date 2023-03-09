import { useState } from "react";
import s from "./Form.module.scss";

const Form = ({
  options,
  initialValue,
  title,
  onSubmit,
  btnTitle,
  children,
}) => {
  const [form, setForm] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <h3 className={s.title}>{title}</h3>
      {options.map(({ name, type, label, placeholder }) => (
        <label key={name}>
          {label && <p className={s.label}>{label}</p>}
          <input
            type={type}
            name={name}
            value={form[name]}
            placeholder={placeholder}
            onChange={handleChange}
          />
        </label>
      ))}
      <div className={s.btnWrapper}>
        <button className={s.btnSubmit} type="submit">
          {btnTitle}
        </button>
        {children}
      </div>
    </form>
  );
};

export default Form;

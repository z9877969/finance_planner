import { useState } from "react";
import s from "./AuthForm.module.scss";

const AuthForm = ({ options, initialValue, title, onSubmit, btnTitle }) => {
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
          <p className={s.label}>{label}</p>
          <input
            type={type}
            name={name}
            value={form[name]}
            placeholder={placeholder}
            onChange={handleChange}
          />
        </label>
      ))}
      <button className={s.btnSubmit} type="submit">
        {btnTitle}
      </button>
    </form>
  );
};

export default AuthForm;

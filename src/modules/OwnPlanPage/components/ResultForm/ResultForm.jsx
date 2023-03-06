import s from "./ResultForm.module.scss";

const ResultForm = () => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>You will have an apartment in:</h3>
      <form className={s.form}>
        <label className={s.label}>
          <p className={s.labelTitle}>Number of years</p>
          <input className={s.input} type="text" name="years" />
        </label>
        <label className={s.label}>
          <p className={s.labelTitle}>Number of years</p>
          <input className={s.input} type="text" name="month" />
        </label>
        <button className={s.btnSubmit} type="submit">Fits</button>
      </form>
    </div>
  );
};

export default ResultForm;

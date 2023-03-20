import ReactDatepicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import s from "./MonthPeriod.module.scss";

const MonthPeriod = ({ date, setDate }) => {
  return (
    <div className={s.wrapper}>
      <ReactDatepicker
        selected={date}
        dateFormat="MMMM, yyyy"
        onChange={setDate}
        className={s.input}
        // calendarClassName={s.calendar}
        showMonthYearPicker
      />
    </div>
  );
};

export default MonthPeriod;

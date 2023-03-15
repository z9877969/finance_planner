import { useEffect, useMemo, useState } from "react";
import ReactSelect from "react-select";
import "./PeriodSelect.scss";

const firstDate = "2021-01-01";

const monthes = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getOptions = (firstDate) => {
  const date = new Date();
  const finishYear = date.getFullYear();
  const finishMonth = date.getMonth();

  const [beginYear, beginMonth] = firstDate
    .split("-")
    .map((el, i) => (i === 1 ? Number(el) - 1 : Number(el)));

  const datesArr = [];
  let year = beginYear;
  let month = beginMonth;
  do {
    const el = {
      label: `${monthes[month]}, ${year}`,
      value: `${year}-${(month + 1).toString().padStart(2, "0")}`,
    };
    datesArr.push(el);
    if (month === 11) {
      month = 0;
      year += 1;
    } else {
      month += 1;
    }
  } while ((year === finishYear && month <= finishMonth) || year < finishYear);
  return datesArr.reverse();
};

const getInitialState = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  return {
    label: `${monthes[month]}, ${year}`,
    value: `${year}-${(month + 1).toString().padStart(2, "0")}`,
  };
};

const PeriodSelect = ({ setValue }) => {
  const [selected, setSelected] = useState(() => getInitialState());

  const options = useMemo(() => getOptions(firstDate), []);

  useEffect(() => {
    setValue(selected.value);
  }, [selected, setValue]);

  return (
    <ReactSelect
      className="preiod-select-container"
      classNamePrefix="preiod-select"
      options={options}
      value={selected}
      onChange={setSelected}
    />
  );
};

export default PeriodSelect;

// <div class="react-select-container">
//   <div class="react-select__control">
//     <div class="react-select__value-container">...</div>
//     <div class="react-select__indicators">...</div>
//   </div>
//   <div class="react-select__menu">
//     <div class="react-select__menu-list">
//       <div class="react-select__option">...</div>
//     </div>
//   </div>
// </div>

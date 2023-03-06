import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { categorySelectOptions as options } from "../../data/categorySelectOptions";
import "./CategorySelect.scss";

const CategorySelect = ({ setValue = () => {} }) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    selected && setValue(selected.value);
  }, [selected, setValue]);

  return (
    <ReactSelect
      className="category-select-container"
      classNamePrefix="category-select"
      options={options}
      value={selected}
      onChange={setSelected}
    />
  );
};

export default CategorySelect;

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

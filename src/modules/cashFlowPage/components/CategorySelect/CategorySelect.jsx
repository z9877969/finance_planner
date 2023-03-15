import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import { categorySelectOptions as options } from "../../data/categorySelectOptions";
import "./CategorySelect.scss";

const CategorySelect = ({ setValue = () => {} }) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    console.log("useEffect_select");
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

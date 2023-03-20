import { useEffect, useMemo, useState } from "react";
import ReactSelect from "react-select";
import useCategories from "../../hooks/useCategories";
import "./CategorySelect.scss";

const setValuePlaceholder = () => {};

const CategorySelect = ({
  setValue = setValuePlaceholder,
  isResetCategory = false,
  initialValue = null,
}) => {
  const [selected, setSelected] = useState(initialValue);
  const categories = useCategories();

  const options = useMemo(() => {
    return categories.map(({ name, title }) => ({ value: name, label: title }));
  }, [categories]);

  const handleChange = (option) => {
    setSelected(option);
    setValue(option.value);
  };

  useEffect(() => {
    isResetCategory && setSelected(null);
  }, [isResetCategory]);

  return (
    <ReactSelect
      className="category-select-container"
      classNamePrefix="category-select"
      options={options}
      value={selected}
      onChange={handleChange}
    />
  );
};

export default CategorySelect;

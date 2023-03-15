import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectorBalance } from "../../../../redux/auth/authSelectors";
import InputsListItem from "../../../../shared/components/InputsListItem/InputsListItem";
import CategorySelect from "../CategorySelect/CategorySelect";
import s from "./TransactionDataList.module.scss";

const TransactionDataList = ({ setData, isParentUpdate }) => {
  const balance = useSelector(selectorBalance);

  const [form, setForm] = useState({
    type: "expense",
    category: "",
    coment: "",
    sum: 0,
  });

  const handleCategory = useCallback((category) => {
    setForm((p) => ({ ...p, category }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((p) => ({
      ...p,
      [name]: name === "sum" ? (value === "" ? value : Number(value)) : value,
    }));
  };

  useEffect(() => {
    setData(form);
    console.log("useEffect_isParrent");
    // eslint-disable-next-line
  }, [isParentUpdate]);

  return (
    <ul className={s.list}>
      <InputsListItem
        name="from-account"
        title="From account"
        placeholder="Enter data"
        value={balance}
      />
      <InputsListItem>
        <CategorySelect setValue={handleCategory} />
      </InputsListItem>
      <InputsListItem
        name="coment"
        title="Expense comment"
        placeholder="Enter data"
        value={form.coment}
        onChange={handleChange}
      />
      <InputsListItem
        name="sum"
        title="Sum"
        placeholder="00.00"
        value={form.sum}
        onChange={handleChange}
      />
    </ul>
  );
};

export default TransactionDataList;

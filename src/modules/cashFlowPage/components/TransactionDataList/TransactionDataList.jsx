import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectorBalance } from "../../../../redux/auth/authSelectors";
import InputsListItem from "../../../../shared/components/InputsListItem/InputsListItem";
import CategorySelect from "../../../../shared/components/CategorySelect/CategorySelect";
import s from "./TransactionDataList.module.scss";
import { expenseInitialState } from "../../data/transactionInitialState";

const TransactionDataList = ({ setData, isSubmiting }) => {
  const balance = useSelector(selectorBalance);

  const [form, setForm] = useState(expenseInitialState);

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
    isSubmiting && setData(form);
    // eslint-disable-next-line
  }, [isSubmiting]);

  useEffect(() => {
    if (balance && !isSubmiting) {
      setForm(expenseInitialState);
      setData(null);
    }
    // eslint-disable-next-line
  }, [balance, setData]);

  return (
    <ul className={s.list}>
      <InputsListItem
        name="from-account"
        title="From account"
        placeholder="Enter data"
        value={balance}
      />
      <InputsListItem title={"Per category"}>
        <CategorySelect
          setValue={handleCategory}
          isResetCategory={!form.category}
        />
      </InputsListItem>
      <InputsListItem
        name="comment"
        title="Expense comment"
        placeholder="Enter data"
        value={form.comment}
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

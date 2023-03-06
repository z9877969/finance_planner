import InputsListItem from "../../../../shared/components/InputsListItem/InputsListItem";
import CategorySelect from "../CategorySelect/CategorySelect";
import s from "./InputsList.module.scss";

const InputsList = () => {
  return (
    <ul className={s.list}>
      <InputsListItem
        name="from-account"
        title="From account"
        placeholder="Enter data"
      />
      <InputsListItem>
        <CategorySelect />
      </InputsListItem>
      <InputsListItem
        name="comments"
        title="Expense comment"
        placeholder="Enter data"
      />
      <InputsListItem name="sum" title="Sum" placeholder="00.00" />
    </ul>
  );
};

export default InputsList;

import InputsListItem from "../../../../shared/components/InputsListItem/InputsListItem";
import { inputsListOptions as options } from "../../data/inputsListOptions";
import s from "./InputsList.module.scss";

const InputsList = () => {
  return (
    <ul className={s.list}>
      {options.map((el, i) => (
        <InputsListItem key={el.name} num={i + 1} {...el} />
      ))}
    </ul>
  );
};

export default InputsList;

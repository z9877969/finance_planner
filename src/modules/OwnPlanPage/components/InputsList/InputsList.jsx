import InputsListItem from "../InputsListItem/InputsListItem";
import { inputsListOptions as options } from "../../data/inputsListOptions";
import s from "./InputsList.module.scss";

const InputsList = () => {
  return (
    <ul className={s.list}>
      {options.slice(0, 3).map((el, i) => (
        <InputsListItem key={el.name} num={i + 1} {...el} />
      ))}
      {options.slice(3).map((el, i) => (
        <InputsListItem key={el.name} num={i + 4} {...el} />
      ))}
    </ul>
  );
};

export default InputsList;

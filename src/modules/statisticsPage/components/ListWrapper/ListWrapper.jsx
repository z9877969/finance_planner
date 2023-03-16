import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import s from "./ListWrapper.module.scss";

const ListWrapper = ({ children }) => {
  return <SimpleBar className={s.list}>{children}</SimpleBar>;
};

export default ListWrapper;

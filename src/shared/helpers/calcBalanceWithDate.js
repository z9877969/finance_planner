import { getFromLS, setToLS } from "./localStorage";

const getDateFromLS = () => getFromLS("curDate");
const setDateToLS = (date) => setToLS("curDate", date);
const getCurDate = () => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
};

const setBalanceToLS = (balance) => setToLS("balance", balance);
const getBalanceFromLS = () => getFromLS("balance");

const getIsDateChange = () => {
  const savedDate = getDateFromLS();
  const curDate = getCurDate();
  return savedDate !== curDate;
};

const setNewDateWithBalance = (balance) => {
  const isDateChange = getIsDateChange();
  if (isDateChange) {
    setDateToLS(getCurDate());
    setBalanceToLS(balance);
  }
};

export { getBalanceFromLS, setNewDateWithBalance };

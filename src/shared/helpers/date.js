export const getLSCurDate = () => localStorage.getItem("curDate");
export const setLSCurDate = (date) => localStorage.setItem("curDate", date);
export const getCurDate = () => {
  const date = new Date();
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
};

export const setNewDate = () => {
  const lsDate = getLSCurDate();
  const date = getCurDate();
  if (lsDate !== date) {
    setLSCurDate(date);
  }
};

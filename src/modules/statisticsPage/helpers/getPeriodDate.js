export const getPeriodDate = (date) => {
  return { month: date.getMonth() + 1, year: date.getFullYear() };
};

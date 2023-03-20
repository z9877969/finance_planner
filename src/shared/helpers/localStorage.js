export const getFromLS = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setToLS = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

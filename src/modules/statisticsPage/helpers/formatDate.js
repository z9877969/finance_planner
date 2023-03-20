export const formatDate = (date) => {
  const cutedDate = date.split("T")[0];
  return cutedDate
    .split("-")
    .reduce((acc, el) => {
      acc.unshift(el);
      return acc;
    }, [])
    .join("-");
};

const categoriesList = [
  "Products",
  "Clothing and footwear",
  "Cafes and restaurants",
  "Beauty and medicine",
  "Health",
  "Transport",
  "Other",
];

const createCategory = (sum, category) => ({
  category,
  sum,
  currency: "UAH",
  procent: 0,
});

const createRandomSum = () => Math.ceil(Math.random() * 20000);

export const categories = Array(categoriesList.length)
  .fill("")
  .map((el, i) => createCategory(createRandomSum(), categoriesList[i]))
  .map((el, i, arr) => {
    const total = arr.reduce((t, { sum }) => t + sum, 0);
    const procent = Math.round((el.sum / total) * 100);
    return { ...el, procent };
  });

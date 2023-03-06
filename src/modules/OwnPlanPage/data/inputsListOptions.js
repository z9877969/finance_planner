import InputSelect from "../components/InputSelect/InputSelect";

export const inputsListOptions = [
  {
    name: "income",
    title: "RFP of both spouses",
    placeholder: "Enter data",
  },
  {
    name: "passive",
    title: "Passive income, months",
    placeholder: "Enter data",
  },
  {
    name: "savings",
    title: "Savings",
    placeholder: "Enter data",
  },
  {
    name: "cost",
    title: "Specify the cost of your future apartment",
    placeholder: "Enter data",
    component: InputSelect,
  },
  {
    name: "square",
    title: "Specify the number of sq.m. of your future apartment",
    placeholder: "Enter data",
  },
  {
    name: "accumulation",
    title: "Accumulation",
    placeholder: "Enter data",
    descr:
      "Specify the percentage that you would like to accumulate per month from the total amount of income and you will see when you reach the goal",
  },
];

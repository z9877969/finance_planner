import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Markers from "../Markers/Markers";
import s from "./Chart.module.scss";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const getRandomNum = () => Math.round(Math.random() * 10000);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(getRandomNum),
      backgroundColor: "#6359e9",
    },
    {
      label: null,
      data: labels.map(getRandomNum),
      backgroundColor: "#3a6af5",
    },
    {
      label: null,
      data: labels.map(getRandomNum),
      backgroundColor: "#f3f3f3",
    },
  ],
};

const Chart = () => {
  return (
    <>
      <h2 className={s.title}>Dynamics of expenses and savings</h2>
      <Markers />
      <Bar options={options} data={data} />
    </>
  );
};

export default Chart;

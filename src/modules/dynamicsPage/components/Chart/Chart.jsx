import Markers from "../Markers/Markers";
import s from "./Chart.module.scss";

const Chart = () => {
  return (
    <>
      <h2 className={s.title}>Dynamics of expenses and savings</h2>
      <Markers />
    </>
  );
};

export default Chart;

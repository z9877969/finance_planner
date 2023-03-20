import s from "./Info.module.scss";
import flatDrawImg from "../../images/flat-draw.png";
import { hryvna as svgHryvna } from "assets/icons/index";

const Info = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.allInfoWrapper}>
        <div className={s.dataWrapper}>
          <p className={s.periodToFinish}>After 4 years 1 month</p>
          <ul className={s.dataList}>
            <li className={s.dataItem}>
              <p className={s.label}>Accumulated, %:</p>
              <p className={s.data}>28%</p>
            </li>
            <li className={s.dataItem}>
              <p className={s.label}>Accumulated, UAH:</p>
              <p className={s.data}>
                60 000
                <img src={svgHryvna} alt="" />
              </p>
            </li>
            <li className={s.dataItem}>
              <p className={s.label}>And this:</p>
              <p className={s.data}>22 кв. м</p>
            </li>
          </ul>
          <div className={s.finishDetectorWrapper}>
            <p className={s.detectorTitle}>22 out of 60 sq.m accumulated</p>
            <div className={s.detectorMainBar}>
              <div className={s.detectorSecondaryBar}></div>
            </div>
          </div>
        </div>
        <img src={flatDrawImg} alt="" className={s.flatDrawImg} />
      </div>
      <div className={s.motivation}>
        <p className={s.motivationDescr}>
          To add more <span>1 sq.m</span> for planning, it remains to accumulate
        </p>
        <div className={s.motivationMeterPrice}>
          14000 <img src={svgHryvna} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Info;

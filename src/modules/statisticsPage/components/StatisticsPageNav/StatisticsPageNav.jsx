import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./StatisticsPageNav.module.scss";

const StatisticsPageNav = () => {
  return (
    <div className={s.wrapper}>
      <NavLink
        to="transactions"
        className={({ isActive }) => {
          return clsx(s.navLink, isActive && s.active);
        }}
      >
        List
      </NavLink>
      <NavLink
        to="categories"
        className={({ isActive }) => {
          return clsx(s.navLink, isActive && s.active);
        }}
      >
        Categories
      </NavLink>
    </div>
  );
};

export default StatisticsPageNav;

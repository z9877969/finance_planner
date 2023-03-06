import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./UserNav.module.scss";

const setActiveLink = ({ isActive }) => clsx(s.link, isActive && s.active);

const UserNav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={setActiveLink} to="/plan">
            Personal plan
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={setActiveLink} to="/cash-flow">
            Cash flow
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={setActiveLink} to="/dynamics">
            Dynamics
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default UserNav;

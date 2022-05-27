import React from "react";
import { NavLink } from "react-router-dom";
// import styles

import styles from "./Sidebar.module.css";
// import images

import DashboardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.content}>
        <div className={styles.user}>
          {/* avatar and user name later*/}
          <p>Hey user</p>
        </div>
        <nav className={styles.links}>
          <ul>
            <li>
              <NavLink to="/">
                <img src={DashboardIcon} alt="dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="create">
                <img src={AddIcon} alt="add project icon" />
                <span>New project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

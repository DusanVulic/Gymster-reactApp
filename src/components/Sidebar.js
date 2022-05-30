import React from "react";
import { NavLink } from "react-router-dom";
// import styles

import styles from "./Sidebar.module.css";
// import images

import DashboardIcon from "../assets/dashboard_icon.svg";
import AddIcon from "../assets/add_icon.svg";
//import avatar component
import Avatar from "./Avatar";

//import useAuthContext to get users propertied
import { useAuthContext } from "./../hooks/useAuthContext";

const Sidebar = () => {
  const { user } = useAuthContext();
  return (
    <div className={styles.sidebar}>
      <div className={styles.content}>
        <div className={styles.user}>
          <Avatar src={user.photoURL} />
          <p>Hey {user.displayName}</p>
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
                <span>New Workout</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;

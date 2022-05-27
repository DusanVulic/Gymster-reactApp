import React from "react";
//styles and images
import styles from "./Navbar.module.css";
//LINK

import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.container}>
          <img src={logo} alt="gymster" className={styles.logo} />
          <span>Paperfox gymster</span>
        </li>
        <li>
          <Link to="login">login</Link>
        </li>
        <li>
          <Link to="signup">signup</Link>
        </li>
        <li>
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

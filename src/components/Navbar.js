import React from "react";
//styles and images
import styles from "./Navbar.module.css";
//LINK

import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

// import useLogut hook

import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
  const { logout, isPending } = useLogout();

  return (
    <div className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.container}>
          <img src={logo} alt="gymster" className={styles.logo} />
          <span>Paperfox gymster</span>
        </li>
        <li>
          <Link to="login" className={styles.link}>
            login
          </Link>
        </li>
        <li>
          <Link to="signup" className={styles.link}>
            signup
          </Link>
        </li>
        <li>
          {!isPending && (
            <button className="btn" onClick={logout}>
              Logout
            </button>
          )}
          {isPending && (
            <button className="btn" disabled>
              Logging out...
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

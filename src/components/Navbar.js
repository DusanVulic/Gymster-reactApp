import React from "react";
//styles and images
import styles from "./Navbar.module.css";
//LINK

import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

// import useLogut hook

import { useLogout } from "../hooks/useLogout";

//auth context

import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout, isPending } = useLogout();

  //do I have a user ? fir conditional rendering

  const { user } = useAuthContext();

  return (
    <div className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.container}>
          <img src={logo} alt="gymster" className={styles.logo} />
          <span>Paperfox gymster</span>
        </li>
        {!user && (
          <li>
            <Link to="login" className={styles.link}>
              login
            </Link>
          </li>
        )}
        {!user && (
          <li>
            <Link to="signup" className={styles.link}>
              signup
            </Link>
          </li>
        )}
        {user && (
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
        )}
      </ul>
    </div>
  );
};

export default Navbar;

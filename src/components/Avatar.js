import React from "react";

import styles from "./Avatar.module.css";

const Avatar = ({ src }) => {
  return (
    <div className={styles.avatar}>
      <img src={src} alt="user avatar" />
    </div>
  );
};

export default Avatar;

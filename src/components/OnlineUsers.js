import React from "react";
//import styles

import styles from "./OnlineUsers.module.css";

//import use collection

import { useCollection } from "./../hooks/useCollection";
//avatar component
import Avatar from "./Avatar";

const OnlineUsers = () => {
  const { isPending, documents, error } = useCollection("users");

  return (
    <div className={styles.list}>
      <h2>All Users</h2>
      {isPending && <div>Loading users...</div>}
      {error && <div>{error}</div>}
      {documents &&
        documents.map((user) => (
          <div key={user.id} className={styles.item}>
            {user.online && <span className={styles.online}></span>}
            <span>{user.displayName}</span>

            <Avatar src={user.photoURL} className={styles.photo} />
          </div>
        ))}
    </div>
  );
};

export default OnlineUsers;

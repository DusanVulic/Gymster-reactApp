import React from "react";
import Avatar from "../../components/Avatar";

//styles
import styles from "./ProjectSummary.module.css";

const ProjectSummary = ({ workout }) => {
  const { name, dueDate, details, assignedUSersList } = workout;

  // !!!!!!!!!!!!!!!!!

  //assignedUSersList - created that property in firestore - typo

  return (
    <div>
      <div className={styles.summary}>
        <h3>{name}</h3>
        <p className={styles.date}>
          workout due by {dueDate.toDate().toDateString()}
        </p>
        <p className={styles.details}> {details}</p>
        <h4>Workout is assigned to : </h4>
        <div className={styles.users}>
          {assignedUSersList &&
            assignedUSersList.map((user) => (
              <div key={user.id} className={styles.img}>
                <Avatar src={user.photoURL} />
                {user.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;

import React, { useState } from "react";
import Avatar from "../../components/Avatar";

//styles
import styles from "./ProjectSummary.module.css";

//import USEFIRESTORE

import { useFirestore } from "../../hooks/useFirestore";

//check user

import { useAuthContext } from "../../hooks/useAuthContext";

//use navigate to redirect after deleting workout
import { useNavigate } from "react-router-dom";

const ProjectSummary = ({ workout }) => {
  const { name, dueDate, details, assignedUSersList } = workout;

  // !!!!!!!!!!!!!!!!!

  //assignedUSersList - created that property in firestore - typo

  //getting user
  const { user } = useAuthContext();

  //delete document function

  const { deleteDocument } = useFirestore("workouts");

  //Navigate after deleting
  const navigate = useNavigate();
  //

  // I could do this way or directly at the button but not awaka instantly but  use : onClick={(e)=>handleDelete(workout.id))}
  const handleDelete = (e) => {
    deleteDocument(workout.id);

    navigate("/");
  };

  return (
    <div>
      <div className={styles.summary}>
        <h3>{name}</h3>
        <p>by {workout.createdBy.displayName}</p>
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

      {user.uid === workout.createdBy.id && (
        <button className="btn" onClick={handleDelete}>
          delete workout
        </button>
      )}
    </div>
  );
};

export default ProjectSummary;

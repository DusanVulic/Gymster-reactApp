import React from "react";

//import styles
import styles from "./WorkoutList.module.css";

//LINK

import { Link } from "react-router-dom";
//import avatar component
import Avatar from "./Avatar";

const WorkoutList = ({ workouts }) => {
  return (
    <div className={styles.workout}>
      {workouts.length === 0 && <p>No workouts yet ! </p>}
      {workouts.map((workout) => (
        <Link key={workout.id} to={`projects/${workout.id}`}>
          <h4>{workout.name}</h4>
          <p> due by {workout.dueDate.toDate().toDateString()}</p>
          <div className={styles.assigned}>
            <ul>
              {workout.assignedUSersList.map((user) => (
                <li key={user.id}>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default WorkoutList;

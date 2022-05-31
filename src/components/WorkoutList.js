import React from "react";

//import styles
import styles from "./WorkoutList.module.css";

const WorkoutList = ({ workouts }) => {
  return (
    <div>
      {workouts.length === 0 && <p>No workouts yet ! </p>}
      {workouts.map((workout) => (
        <div key={workout.id}>{workout.name}</div>
      ))}
    </div>
  );
};

export default WorkoutList;

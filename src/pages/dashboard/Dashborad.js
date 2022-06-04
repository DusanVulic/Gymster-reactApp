import React from "react";

import styles from "./Dashboard.module.css";

//import useCollection

import { useCollection } from "../../hooks/useCollection";
import WorkoutList from "../../components/WorkoutList";
import WorkoutFilter from "./WorkoutFilter";

const Dashborad = () => {
  const { documents, error } = useCollection("workouts");
  return (
    <div>
      <h2 className={styles.title}> Dashboard</h2>
      {error && <p className="error"> oooops....something goes wrong</p>}
      <WorkoutFilter />
      {documents && <WorkoutList workouts={documents} />}
    </div>
  );
};

export default Dashborad;

import React from "react";

import styles from "./Dashboard.module.css";

//import useCollection

import { useCollection } from "../../hooks/useCollection";
import WorkoutList from "../../components/WorkoutList";

const Dashborad = () => {
  const { documents, error } = useCollection("workouts");
  return (
    <div>
      <h2 className={styles.title}> Dashborad</h2>
      {error && <p className="error"> oooops....something goes wrong</p>}
      {documents && <WorkoutList workouts={documents} />}
    </div>
  );
};

export default Dashborad;

import React, { useState } from "react";

import styles from "./Dashboard.module.css";

//import useCollection

import { useCollection } from "../../hooks/useCollection";
import WorkoutList from "../../components/WorkoutList";
import WorkoutFilter from "./WorkoutFilter";

//use Auth
import { useAuthContext } from "../../hooks/useAuthContext";

const Dashborad = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("workouts");
  const [currentFilter, setCurrentFilter] = useState("all");

  const changeFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const workouts = documents
    ? documents.filter((document) => {
        switch (currentFilter) {
          case "all":
            return true;

          case "Shoulders":
          case "Legs":
          case "ABS":
          case "Chest":
          case "Back":
          case "Arms":
            console.log(document.category, currentFilter);
            return document.category === currentFilter;
          default:
            return true;
        }
      })
    : null;

  return (
    <div>
      <h2 className={styles.title}> Dashboard</h2>
      {error && <p className="error"> oooops....something goes wrong</p>}
      {documents && (
        <WorkoutFilter
          currentFilter={currentFilter}
          changeFilter={changeFilter}
        />
      )}
      {workouts && <WorkoutList workouts={workouts} />}
    </div>
  );
};

export default Dashborad;

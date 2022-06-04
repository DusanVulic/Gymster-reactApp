import React from "react";

//styles
import styles from "./WorkoutFilter.module.css";
// filter list

const filterList = [
  "all",
  "mine",
  "shoulders",
  "legs",
  "abs",
  "chest",
  "back",
  "arms",
];

const WorkoutFilter = ({ currentFilter, changeFilter }) => {
  const handleClick = (newFilter) => {
    console.log(newFilter);
    changeFilter(newFilter);
  };

  return (
    <div className={styles.filter}>
      <nav>
        <p>filter by:</p>
        {filterList.map((filter) => (
          <button
            key={filter}
            onClick={() => handleClick(filter)}
            className={currentFilter === filter ? styles.active : styles.button}
          >
            {filter}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default WorkoutFilter;

import React from "react";

//import useParams to get document id
import { useParams } from "react-router-dom";

//import useDocument
import { useDocument } from "../../hooks/useDocument";

//styles
import styles from "./Project.module.css";

const Project = () => {
  const { id } = useParams();

  const { document, error } = useDocument("workouts", id);

  if (error) {
    return <div className="error"> {error} </div>;
  }

  if (!document) {
    return <div className="loading"> Loading ... </div>;
  }

  return (
    <div className={styles.details}>
      <h2>{document.name}</h2>
    </div>
  );
};

export default Project;

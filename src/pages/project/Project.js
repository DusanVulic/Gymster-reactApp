import React from "react";

//import useParams to get document id
import { useParams } from "react-router-dom";

//import useDocument
import { useDocument } from "../../hooks/useDocument";
import Comments from "./Comments";

//styles
import styles from "./Project.module.css";
import ProjectSummary from "./ProjectSummary";

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
      <ProjectSummary workout={document} />
      <Comments workout={document} />
    </div>
  );
};

export default Project;

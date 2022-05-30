import React, { useState } from "react";

//styles
import styles from "./Create.module.css";

const Create = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    console.log("form submitovana");
  };

  return (
    <div className={styles.form}>
      <h2> Create new workout</h2>
      <form onSubmit={submitForm}>
        <label>
          <span>Workout name</span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>Workout name</span>
          <textarea
            required
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </label>
        <label>
          <span>Workout date</span>
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <label>
          <span>Workout category </span>
          {/* select here */}
        </label>
        <label>
          <span>Asign to</span>
          {/* assignee here */}
        </label>
        <button className="btn">Add workout</button>
      </form>
    </div>
  );
};

export default Create;

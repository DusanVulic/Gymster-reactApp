import React, { useState } from "react";

//import REACT SELECT

import Select from "react-select";

//styles
import styles from "./Create.module.css";

// create  workout category

const categories = [
  { value: "Shoulders", label: "Shoulders" },
  { value: "Legs", label: "Legs" },
  { value: "ABS", label: "ABS" },
  { value: "Chest", label: "Chest" },
  { value: "Back", label: "Back" },
  { value: "Arms", label: "Arms" },
];

const Create = () => {
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [assignedUsers, setAssignedUsers] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    console.log("form submitovana", name, details, date, category.value);
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
          <span>Workout details</span>
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
          <Select
            options={categories}
            onChange={(option) => setCategory(option)}
          />
        </label>
        <label>
          <span>Asign to</span>
          <Select />
        </label>
        <button className="btn">Add workout</button>
      </form>
    </div>
  );
};

export default Create;

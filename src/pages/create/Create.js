import React, { useState, useEffect } from "react";

//import REACT SELECT

import Select from "react-select";

//styles
import styles from "./Create.module.css";

//import use collection

import { useCollection } from "../../hooks/useCollection";

//import timestamp

import { timestamp } from "../../firebase/config";

// import useAuth to get an user

import { useAuthContext } from "../../hooks/useAuthContext";

//import useFirestore to import function
import { useFirestore } from "./../../hooks/useFirestore";

//use navigate to redirect after submitting project
import { useNavigate } from "react-router-dom";

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

  const [formError, setFormError] = useState(null);

  const { user } = useAuthContext();

  //add project document function
  const { response, addDocument } = useFirestore("projects");
  //

  //Navigate
  const navigate = useNavigate();
  //
  const submitForm = async (e) => {
    e.preventDefault();

    setFormError(null);
    if (!category) {
      setFormError("please select workout category");
      return;
    }
    if (assignedUsers.length < 1) {
      setFormError("please assign workout for at least one user");
      return;
    }

    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };

    const assignedUSersList = assignedUsers.map((u) => {
      return {
        displayName: u.value.displayName,
        photoURL: u.value.photoURL,
        id: u.value.id,
      };
    });

    const project = {
      name,
      details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(date)),
      comments: [],
      createdBy,
      assignedUSersList,
    };

    await addDocument(project);
    if (!response.error) {
      navigate("/");
    }
  };

  //create user otions

  const { documents } = useCollection("users");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (documents) {
      const options = documents.map((user) => {
        return { value: user, label: user.displayName };
      });
      setUsers(options);
    }
  }, [documents]);

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
          <Select
            options={users}
            onChange={(option) => setAssignedUsers(option)}
            isMulti
          />
        </label>
        <button className="btn">Add workout</button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default Create;

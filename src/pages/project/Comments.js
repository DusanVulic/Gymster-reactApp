import React, { useState } from "react";
//styles
import styles from "./Comments.module.css";

import { timestamp } from "../../firebase/config";
import { useAuthContext } from "./../../hooks/useAuthContext";

//import useFirestore

import { useFirestore } from "../../hooks/useFirestore";

const Comments = ({ workout }) => {
  const [comment, setComment] = useState("");

  const { user } = useAuthContext();

  // update document function from useFirestore

  const { updateDocument, response } = useFirestore("workouts");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const commentToAdd = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      content: comment,
      createdAt: timestamp.fromDate(new Date()),
      id: Math.random(),
    };

    console.log(commentToAdd);

    await updateDocument(workout.id, {
      comments: [...workout.comments, commentToAdd],
    });
    if (!response.error) {
      setComment("");
    }
  };

  return (
    <div className={styles.comments}>
      <form className="commment" onSubmit={onSubmitHandler}>
        <label>
          <span>add new comment</span>
          <textarea
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <button className="btn"> add comment</button>
      </form>
    </div>
  );
};

export default Comments;

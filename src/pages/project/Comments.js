import React, { useState } from "react";
//styles
import styles from "./Comments.module.css";

import { timestamp } from "../../firebase/config";
import { useAuthContext } from "./../../hooks/useAuthContext";

//import useFirestore

import { useFirestore } from "../../hooks/useFirestore";
import Avatar from "./../../components/Avatar";

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
      <h4 className={styles.title}>project comments:</h4>
      <ul>
        {workout.comments.length > 0 &&
          workout.comments.map((comment) => (
            <li key={comment.id} className={styles.list}>
              <div className={styles.author}>
                <Avatar src={comment.photoURL} />
                <p>{comment.displayName}</p>
              </div>
              <div className={styles.date}>
                <p>date here</p>
              </div>
              <div className={styles.content}>
                <p>{comment.content}</p>
              </div>
            </li>
          ))}
      </ul>

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

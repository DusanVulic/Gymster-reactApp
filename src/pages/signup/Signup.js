import React, { useState } from "react";

import styles from "./Signup.module.css";

//import useSignuP

import { useSignup } from "../../hooks/useSignup";

//import useNavigate

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  //signup parameters

  const { signup, isPending, error } = useSignup();

  /// navigate
  const navigate = useNavigate();
  ///
  const handleFileChange = (e) => {
    setThumbnail(null);
    let selected = e.target.files[0];
    console.log(selected);
    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("selected file must be image");
      return;
    }
    if (selected.size > 300000) {
      setThumbnailError("selected image must be less than 10KB");
      return;
    }
    setThumbnailError(null);
    setThumbnail(selected);
    console.log("thumbnail updated");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email, password, displayName, thumbnail);
    signup(email, password, displayName, thumbnail);
    navigate("/");
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <h3>signup</h3>
      <label>
        <span>email:</span>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>password:</span>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label>
        <span>display name:</span>
        <input
          required
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </label>
      <label>
        <span>profile image:</span>
        <input required type="file" onChange={handleFileChange} />
        {thumbnailError && <div className="error"> {thumbnailError} </div>}
      </label>
      {!isPending && (
        <button className="btn" type="submit">
          Sign up
        </button>
      )}
      {isPending && (
        <button className="btn" type="submit" disabled>
          Loading ...
        </button>
      )}
      {error && <div className="error"> ooops....something goes banana </div>}
    </form>
  );
};

export default Signup;

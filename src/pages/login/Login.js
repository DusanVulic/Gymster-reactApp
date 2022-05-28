import React, { useState } from "react";

//styles
import styles from "./Login.module.css";

//import useLogin

import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isPending, error } = useLogin();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    login(email, password);
  };

  return (
    <>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <h3>login</h3>
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

        {!isPending && (
          <button className="btn" type="submit">
            Login
          </button>
        )}
        {isPending && (
          <button className="btn" type="submit" disabled>
            Loading ...
          </button>
        )}
        {error && <div className="error"> ooops....something goes banana </div>}
      </form>
    </>
  );
};

export default Login;

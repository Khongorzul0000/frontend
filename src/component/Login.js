import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import styles from "../styles/Login.module.css";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate('/home')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.errorMessage;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <>
    <main>
      <section>
        <div className={styles.pos}>
          <div className={styles.login}>
            <h1 className={styles.h1}>Log in</h1>
            <form>
              <div className={styles.gap}>
                <label htmlFor="email-address"  className={styles.just}>Email address</label>
                <input
                  id="email address"
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                ></input>
              </div>
              <div className={styles.gap}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                ></input>
              </div>
             <div className={styles.btn}>
             <button type="sumbit" onClick={onLogin} >log in</button>
             </div>
            </form>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

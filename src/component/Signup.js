import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import axios from "axios";
import styles from "../styles/Signup.module.css";
import {Login} from "./Login"

export const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");




  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        //   axios.post('http://localhost:3001/users', {
        //     email:user.email,
        //     password:password,
        //     userName:user.displayName
        //   })
        //   console.log(user);
        //   navigate("/login");
        // })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.errorMessage;
        console.log(errorCode, errorMessage);
      }); 
      
  };

  return (
    <>
      <main className={styles.body}>
        <section>
          <div className={styles.pos}>
            <div className={styles.signup}>
              <h1 className={styles.h1}>Signup</h1>
              <form className={styles.space}>
                <div>
                  <label htmlFor="email-address" className={styles.justify}>
                    Email address
                  </label>
                  <div className={styles.inju}>
                    <input
                      type="email"
                      label="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Email address"
                      className={styles.email}
                    ></input>
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className={styles.justify}>
                    Password
                  </label>
                  <div className={styles.inju}>
                    <input
                      type="password"
                      label="Create password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Password"
                    ></input>
                  </div>
                </div>
                <div className={styles.btn}>
                  <button type="sumbit" onClick={onSubmit}>
                    sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

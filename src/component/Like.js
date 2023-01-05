import { useState, useRef } from "react";
import styles from "../styles/Like.module.css";
import { Song } from "./Song";

export const Like = () => {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");

  const add = () => {
    if (!value) return;
    const newTask = { text: value, isCompleted: false };
    setTasks([...tasks, newTask]);
  };
  const remove = (index) => {
    console.log("remove");
    const newTasks = tasks.filter((_, i) => {
      if (i === index) return false;
      return true;
    });
    setTasks(newTasks);
  };
  const handleCheck = (index) => {
    const tasksClone = [...tasks];
    tasksClone[index].isCompleted = !tasksClone[index].isCompleted;
    setTasks(tasksClone);
  };

  return (
    <div className={styles.bg}>
      <div>
       <div className={styles.egnee}>
       <input
          className={styles.input}
          placeholder="add one you like"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button className={styles.btn} onClick={add}>
          add
        </button>
       </div>
        <p className={styles.liked}>Your liked ones</p>
        <div className={styles.over}>
          {tasks.map((task, index, imgSrc) => {
            return (
              <div className={styles.row}>
                <div className={styles.card}>
                  <img
                    src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg"
                    className={styles.card_img}
                  ></img>
                  <p className={styles.liked_one}>{task.text}</p>
                  <button className={styles.dlt} onClick={() => remove(index)}>
                    delete from liked
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

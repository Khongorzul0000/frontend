import styles from "../styles/My.module.css";
import { useState, useEffect} from "react";
import { BsThreeDots } from "react-icons/bs";
import axios from "axios"

export const My = () => {
  const [tasks, setTasks] = useState([]);
  const [value, setValue] = useState("");
  const [image, setImage] = useState("");
  const [data, setData] = useState([0]);

  
  useEffect(() => {
    axios
      .get("https://localhost:3001")

      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  

  const add = () => {
    const newTask = { text: value, isCompleted: false, img: image };
    setTasks([...tasks, newTask]);
    console.log(value);
    if ((!value, !image)) return;
  };
  const remove = (index) => {
    console.log("remove");
    const newTasks = tasks.filter((_, i) => {
      if (i === index) return false;
      return true;
    });
    setTasks(newTasks);
    if (!value) {
      console.log(value);
    }
  };

  return (
    <>
    <div>
      <div className={styles.eight}>
        <div className={styles.rest}>
          <img
            src="https://img.freepik.com/free-photo/dark-room-background-with-light_125540-1022.jpg?w=2000"
            className={styles.cat}
          ></img>
          <div className={styles.side}>
            <div>play-list</div>
            <h1 className={styles.pl}>My play-list #1</h1>
            <div>User name</div>
          </div>
        </div>
        <div>
          <div className={styles.dot}>
            <BsThreeDots />
          </div>
          <div className={styles.hr}></div>
          <p className={styles.let}>Create your own play-list</p>
          <div className={styles.baseline}>
          <input
            className={styles.in}
            placeholder="name of song"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          ></input>
          <input
            className={styles.in}
            placeholder="link of image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></input>
          <button className={styles.btn} onClick={add}>
            add
          </button>
          </div>

          <div className={styles.over}>
            {tasks.map((task, index, imgSrc) => {
              return (
                <div className={styles.row}>
                  <div className={styles.card}>
                    <img src={task.img} className={styles.card_img}></img>
                    <p className={styles.liked_one}>{task.text}</p>
                    <button
                      className={styles.dlt}
                      onClick={() => remove(index)}
                    >
                      delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

import styles from "../styles/See.module.css";
import axios from "axios";
import { MdAccessTime } from "react-icons/md";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Left, Nav } from "../component";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillPropertySafety } from "react-icons/ai";
export const See = (props) => {
  const [data, setData] = useState([0]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(24);
  const baseUrl = "https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/";
  useEffect(() => {
    axios
      .get(baseUrl + `users?limit=${limit}&page=${page}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [limit]);

  

  
  
  return (
    <>
      <div className={styles.col}>
        <div>
          <div>
            <div className={styles.intro}>
              
                <div className={styles.intro_pos}>
                  <img src="https://i.scdn.co/image/ab6761610000e5eb51faefcdb46be932bee61627" className={styles.intro_img}></img>
                  <div className={styles.intro_intro}>
                    <p>Play-list</p>
                    <h1 className={styles.h1}>Every time</h1>
                    <p>Keep calm and focus whit abmient and post-rock music</p>
                  </div>
                </div>
              
            </div>
            <div className={styles.list}>
              <div className={styles.mur}>
                <div className={styles.play}>
                  <AiFillPlayCircle/>
                </div>
                <div className={styles.heart}>
                  <AiOutlineHeart/>
                </div>
              </div>
              <div className={styles.grid}>
                <p className={styles.tit}>#TITLE</p>
                <p className={styles.al}>ALBUM</p>
                <p className={styles.add}>DATED ADDED</p>
                <div className={styles.icon}>
                  <MdAccessTime />
                </div>
              </div>
              <hr className={styles.hr}></hr>
              <div className={styles.hidden}>
                {data.map(({ image, id, name }) => (
                  <div className={styles.list_row}>
                    <div className={styles.list_flex}>
                      <div>{id}.</div>
                      <img src={image} className={styles.row_img}></img>
                      <p>{name}</p>
                    </div>
                    <p className={styles.al}>{name}</p>
                    <p className={styles.add}>7 days ago</p>
                    <p>3:34</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

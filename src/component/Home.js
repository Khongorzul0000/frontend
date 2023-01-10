import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import styles from "../styles/Main.module.css";
import { Left, Song, Nav, Happy, Oneof, Lenght } from "../component";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import axios from "axios";

export const Home = () => {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/Signup");
        console.log("ashgu dee");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
        const uid = user.uid;
        console.log(user);
        console.log("uid", uid);
      } else {
        console.log("user is logged");
      }
    });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/playlists")
      .then((res) => {
        setPlaylist(res.data);
      })
      .catch(console.log);
  }, []);

  const createPlaylist = () => {
    const newPlaylist = { title: title, description: des };
    setPlaylist([...playlist, newPlaylist]);
    
    if ((!title, !des)) {
      return;
    }
    axios
      .get("http://localhost:3002/playlists", {
        title: title,
        description: des,
        creatorId: user.uid,
        isPrivate: true,
      })
      .then((res) => {
        console.log(res);
        console.log("poooo");
      });
  };
  const deletePlaylist = () =>{
    axios
    .delete("http://localhost:3002/playlists",{

    })
  }

  return (
    <div className={styles.be}>
      <div className={styles.cp}>
        <h1>createPlaylist</h1>
      </div>
      <div className={styles.nav}>
        <div className={styles.dec}>
          <p>createPlaylist</p>
          <input
            className={styles.inpt}
            value={title}
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <input
            className={styles.inpt}
            value={des}
            onChange={(e) => setDes(e.target.value)}
            placeholder="description"
          ></input>
          <button onClick={createPlaylist} className={styles.cr}>createplaylist</button>
        </div>
        <div>{/* <button onClick={handleLogout}>logout</button> */}</div>
      </div>
      <div className={styles.main}>
        {console.log(playlist, "playlist")}
        <div className={styles.plj}>
          {playlist.map((play, index) => {
            return (
              <div >
                <div className={styles.plca}>
                  <img src="https://wallpapercave.com/wp/wp8404552.jpg" className={styles.wall}></img>
                  <p className={styles.title}>{play.title}</p>
                  <p className={styles.des}>{play.description}</p>
                  <button onClick={deletePlaylist} className={styles.ax}>delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

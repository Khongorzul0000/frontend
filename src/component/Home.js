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
      .catch((error) => {console.log(error)});
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
    axios.get("http://localhost:3001/playlists").then((res) => {
      setPlaylist(res.data);
    }).catch(console.log)
  }, [])

  const createPlaylist = () => {
    const newPlaylist = { title: title, description: des };
    setPlaylist([...playlist, newPlaylist]);
    console.log(title);
    console.log(des);
    if ((!title, !des)) return;
    axios
      .post("http://localhost:3001/playlists", {
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

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.username}>{user && <p>{user.email}</p>}</div>
        <div className={styles.dec}>
          <p>title</p>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <p>description</p>
          <input value={des} onChange={(e) => setDes(e.target.value)}></input>
          <button onClick={createPlaylist}>createplaylist</button>
        </div>
        <div>
          <button onClick={handleLogout}>logout</button>
        </div>
      </div>
      <div className={styles.main}>
        {console.log(playlist, 'playlist')}
       <div>{playlist.map((play, index) =>{
        return(<>
        <div className={styles.plca}>
          <p>{play.title}</p>
          <p>{play.description}</p>
        </div>
        </>)
       })}</div>
      </div>
    </>
  );
};

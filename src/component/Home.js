import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import styles from "../styles/Main.module.css";
import { Left, Song, Nav, Happy, Oneof, Lenght } from "../component";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import axios from "axios";

export const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/Signup");
        console.log("ashgu dee");
      })
      .catch((error) => {});
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
  const createPlaylist = () => {
    axios
      .post("http://localhost:3001/playlists", {
        title: "bish",
        description: "good",
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
      <div className={styles.username}>
      {user && <p>{user.email}</p>}
      </div>
      <div>
        <button onClick={handleLogout}>logout</button>
        <button onClick={createPlaylist}>createplaylist</button>
      </div>
    </div>
    <div className={styles.main}>
      
    <div>
      <div className={styles.body}>
        <div className={styles.over}>
        <h2 className={styles.focus}>Focus song</h2>
        <Lenght/>
        <h2 className={styles.focus}>Recommended radio</h2>
        <Song/>
        <h2 className={styles.focus}>Mood</h2>
        <div className={styles.p}>/available to like/</div>
        <Oneof/>
        <h2 className={styles.focus}>Spotify play-lists</h2>
        <div className={styles.p}>/available to like/</div>
        <Happy />
        </div>
       
      </div>
    </div>
  </div></>
  );
};

import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import styles from "../styles/Main.module.css";
import { Modal } from "../component";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import axios from "axios";

export const Home = () => {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);

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

  const createPlaylist = () => {
    if (!des) return;

    const newPlaylist = { title: title, description: des };
    setPlaylist([...playlist, newPlaylist]);

    if ((!title, !des)) {
      return;
    }
    axios
      .post("http://localhost:3002/playlists", {
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

  useEffect(() => {
    axios
      .get("http://localhost:3002/playlists")
      .then((res) => {
        setPlaylist(res.data);
      })
      .catch(console.log);
  }, []);

  const dltBtn = (id) => {
    console.log(id);

    axios.delete(`http://localhost:3002/playlist/${id}`).then((res) => {
      console.log(res);
    });

    
  
  };
  

  return (
    <div className={styles.be}>
      {isShow && (
        <div
          style={{
            padding: "40px",
            backgroundColor: "#121212",
            height: "100vh",
          }}
        >
          <Modal />
        </div>
      )}
      <div>
        {!isShow && (
          <div>
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
                <button onClick={createPlaylist} className={styles.cr}>
                  createplaylist
                </button>
              </div>
            </div>
            <div></div>
            <div className={styles.main}>
              {console.log(playlist, "playlist")}
              <div className={styles.plj}>
                {playlist.map((play, index) => {
                  return (
                    <div>
                      <div className={styles.plca}>
                        <img
                          alt="just wallpaper"
                          src="https://wallpapercave.com/wp/wp8404552.jpg"
                          className={styles.wall}
                        ></img>
                        <p className={styles.title}>{play.title}</p>
                        <p className={styles.des}>{play.description}</p>
                        <div style={{ display: "flex" }}>
                          <button
                            className={styles.ax}
                            // onClick={() => dltBtn(play._id, index, play)}
                            onClick={() => dltBtn( play._id )}
                          >
                            delete
                          </button>
                          <button
                            className={styles.ax}
                            onClick={() => setIsShow(true)}
                          >
                            see songs
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

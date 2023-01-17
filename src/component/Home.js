import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import styles from "../styles/Main.module.css";
import { Left, Song, Nav, Happy, Oneof, Lenght , Modal} from "../component";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import axios from "axios";

export const Home = () => {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("");
  const [lana, setlana] = useState("");
  const [des, setDes] = useState("");
  const [songlist, setSonglist] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [chose, setChose] = useState(false);
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false)

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
  

  // const showSong = () =>{
  //   console.log("showSong is woking")
  //   const showList = {title:lana, status:chose};
  //   setSonglist([...songlist, showList])
  //   const withChose = [songlist]
  //   withChose[index].setChose = !withChose[index].setChose
  //   setSonglist(showList)
  //   console.log(showList)
  // }


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
    <div>
    {/* {isShow === true && songlist.map((list, index) =>{
            return(
              <>
              <div className={styles.white}></div>
              </>
            )
          })} */}
          {
            isShow && <div style={{
              padding: "40px",
              backgroundColor : "white"
            }}>
             <Modal/>
              </div>
          }
    </div>
      <div className={styles.main}>
        {console.log(playlist, "playlist")}
        <div className={styles.plj}>
          {playlist.map((play, index) => {
            return (
              <div >
                <div className={styles.plca} onClick={() => setIsShow(true)}>
                  <img src="https://wallpapercave.com/wp/wp8404552.jpg" className={styles.wall}></img>
                  <p className={styles.title}>{play.title}</p>
                  <p className={styles.des}>{play.description}</p>
                  <button className={styles.ax}>delete</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
};



import { FaSpotify } from "react-icons/fa";
import { AiFillPlusSquare } from "react-icons/ai";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { Home, Signup, My, Search, Like, Login } from "../component";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "../styles/Left.module.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase";
export const Left = () => {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
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

  

  return (
    <div className={styles.ai}>
      <BrowserRouter>
        <div className={styles.body}>
          <div className={styles.back}>
            <div className={styles.spoty}>
              <FaSpotify />
              Play-list
            </div>
            <div className={styles.home}>
              <AiFillHome />
              <Link to="Home" className={styles.link}>
                Home
              </Link>
            </div>
            <div className={styles.home}>
              <AiOutlineSearch />
              <Link to="Search" className={styles.link}>
                Search
              </Link>
            </div>
            <div className={styles.ttt}>
              <div className={styles.home}>
                <AiFillPlusSquare />
                <Link to="create play-list" className={styles.link}>
                  Create play-list
                </Link>
              </div>

              <div className={styles.home}>
                <BsBookmarkHeartFill />
                <Link to="liked songs" className={styles.link}>
                  Liked songs
                </Link>
              </div>
            </div>
            <hr></hr>
            
          </div>
        </div>
        <div className={styles.fb}>
          <div className={styles.nav}>
            <div className={styles.zai}>
              <div className={styles.username}>
                {user && (
                  <p className={styles.zereg}>
                    <div className={styles.nuur}>
                      <FaUserAlt />
                    </div>
                    user : {user.email}
                  </p>
                )}
              </div>
              <div className={styles.ger}>
                <Link to="sign-up" className={styles.link}>
                  Sign-up
                </Link>
              </div>
              <div className={styles.ger}>
                <Link to="log-in" className={styles.link}>
                  login
                </Link>
              </div>
            </div>
          </div>
          <Routes>
            <Route path="Home" element={<Home />}></Route>
            <Route path="/" element={<My />}></Route>
            <Route path="Search" element={<Search />}></Route>
            <Route path="sign-up" element={<Signup />}></Route>
            <Route path="log-in" element={<Login />}></Route>
            <Route path="create play-list" element={<Home />}></Route>
            <Route path="liked songs" element={<Like />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

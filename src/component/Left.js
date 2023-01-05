import { FaSpotify } from "react-icons/fa";
import { AiFillPlusSquare } from "react-icons/ai";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { AiFillSignal } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { See, Main, Signup, My, Search, Like, Login } from "../component";
import { BiLibrary } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import styles from "../styles/Left.module.css";
export const Left = () => {
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
            <div className={styles.play}>
              <AiFillPlayCircle />
              <Link to="see-more" className={styles.link}>
                See more
              </Link>
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
        

        <div className={styles.fb}>
          {/* <div className={styles.nav}>
            <div className={styles.zai}>
            <div className={styles.signup}>
              <Link to="signup">sign up</Link>
            </div>
            <div className={styles.signup}>
              <Link to="login">log in</Link>
            </div>
            </div>
          </div> */}
          <Routes>
            <Route path="Home" element={<Main />}></Route>
            <Route path="/" element={<Main />}></Route>
            <Route path="Search" element={<Search />}></Route>
            <Route path="see-more" element={<See />}></Route>
            <Route path="sign-up" element={<Signup />}></Route>
            <Route path="log-in" element={<Login />}></Route>
            <Route path="create play-list" element={<My />}></Route>
            <Route path="liked songs" element={<Like />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

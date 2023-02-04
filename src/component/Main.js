import styles from "../styles/Main.module.css";

import { Song, Happy, Oneof, Lenght } from "../component";

export const Main = () => {


  return (
    <>
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
      </div>
    </>
  );
};

import styles from "../styles/Oneof.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { TbHeartOff } from "react-icons/tb";
import { Left, Main } from ".";
import { useState } from "react";
import { FaSpotify } from "react-icons/fa";

const SONGS = [
  {
    imgSrc:
      "https://seeded-session-images.scdn.co/v1/img/track/7y6ZbWKMSZId2ykSCaiX0u/en",
    p: "By spotify",
    h: "Somewhere Over there ",
    isLiked: false,
  },
  {
    imgSrc:
      "https://seeded-session-images.scdn.co/v1/img/track/7yq4Qj7cqayVTp3FF9CWbm/en",
    p: "By spotify",
    h: "Riptide radio",
    isLiked: false,
  },

  {
    imgSrc:
      "https://seeded-session-images.scdn.co/v1/img/track/0iNZGC211wst3VjtobNnC5/en",
    p: "By spotify",
    h: "Family line radio",
    isLiked: false,
  },
  {
    imgSrc:
      "https://seeded-session-images.scdn.co/v1/img/track/5TXDeTFVRVY7Cvt0Dw4vWW/en",
    p: "By spotify",
    h: "Revenge radio",
    isLiked: false,
  },
  {
    imgSrc:
      "https://seeded-session-images.scdn.co/v1/img/track/2QjOHCTQ1Jl3zawyYOpxh6/en",
    p: "By spotify",
    h: "Sweater heather radio",
    isLiked: false,
  },
  {
    imgSrc:
      "https://seeded-session-images.scdn.co/v1/img/artist/1Xyo4u8uXC1ZmMpatF05PJ/en",
    p: "By spotify",
    h: "The weeknd radio",
    isLiked: false,
  },
];

export const Oneof = () => {
  const [songs, setSongs] = useState(SONGS);

  const likeClick = (index) => {
    const allLike = [...songs];
    allLike[index].isLiked = !allLike[index].isLiked;
    setSongs(allLike);
    console.log(allLike);
  };

  return (
    <div className={styles.space}>
      {songs &&
        songs.map((song, index) => (
          <div>
            <div className={styles.card}>
              <img src={song.imgSrc} className={styles.cat}></img>
              <div className={styles.h}>{song.h}</div>
              <div className={styles.p}>{song.p}</div>
              <div className={styles.like} onClick={() => likeClick(index)}>
                <div> {song.isLiked ? <AiOutlineHeart /> : <TbHeartOff />}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

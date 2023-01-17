import styles from "../styles/Modal.module.css";
import { useState } from "react";
import axios from "axios";
export const Modal = () => {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [allsongs, setAllsongs] = useState([]);
  const createSong = () => {
    const newSong = { name: name, artist: artist };
    setAllsongs([...allsongs, newSong]);
    console.log(name, artist);
    axios
      .get("http://localhost:3002/songs", {
        title: name,
        artist: artist,
      })
      .then((res) => {
        console.log(res);
        console.log("modal");
      });
  };
  return (
    <>
      <div className={styles.flex}>
        <div className={styles.create}>
          Create songs
          <input
            className={styles.input}
            placeholder="name of song"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            className={styles.input}
            placeholder="name of artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          ></input>
          <button className={styles.button} onClick={createSong}>
            create song
          </button>
        </div>
      </div>
      <div className={styles.not}>
        <p className={styles.title} style={{ color: "black", width: "40vw" }}>
          #title
        </p>
        <p style={{ color: "black", width: "30vw" }}>artist</p>
        <p style={{ color: "black" }}>date</p>
      </div>
      <div>
        {allsongs.map((song, index) => {
          return (
            <div className={styles.not}>
              <div style={{ color: "black", width: "40vw" }}>{song.name}</div>
              <div style={{ color: "black", width: "30vw" }}>{song.artist}</div>
              <div></div>
            </div>
          );
        })}
      </div>
    </>
  );
};

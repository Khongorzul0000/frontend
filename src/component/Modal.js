import styles from "../styles/Modal.module.css";
import { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { isEmpty } from "@firebase/util";
export const Modal = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [allsongs, setAllsongs] = useState([]);

  const createSong = () => {

if(!artist)return
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
  const clickBtn = () =>{
    if( 1===1){
      navigate("signup");
    }
  }

  const dltBtn = (index) =>{
    const removeList = allsongs.filter((_,i) =>{
      if(i === index) return 
    })
    setAllsongs(removeList)

  }

  return (
    <div>
      <div className={styles.cir}>
      <div className={styles.box} onClick={clickBtn}>
        <AiOutlineArrowLeft/>
      </div>
      </div>
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
        <p className={styles.title} style={{ color: "white", width: "35vw" }}>
          #title
        </p>
        <p style={{ color: "white", width: "25vw" }}>artist</p>
        <p style={{ color: "white" }}>date</p>
      </div>
      <hr></hr>
      <div>
        {allsongs.map((song, index) => {
          return (
            <div className={styles.not}>
              <div style={{ color: "white", width: "35vw", height:"40px"}}>{song.name}</div>
              <div style={{ color: "white", width: "25vw" }}>{song.artist}</div>
              <div style={{ color: "white", width: "10vw" }}>date</div>
              <button style={{ height:"30px"}} onClick={dltBtn}>delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

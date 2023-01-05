import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/Song.module.css";
export const Song = () => {
  const [data, setData] = useState([0]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const baseUrl = "https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1";
  useEffect(() => {
    axios
      .get(baseUrl + `/users?limit=${limit}&page=${page}`)

      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [limit]);

  // const addPlaylist = () => {
  //   axios.post(baseUrl + `users`, [...data, {}]);
    
  // };

  // const updatePlaylist = (id) => {
  //   axios.put(baseUrl + `users/8/playlists/${id}`, {listName: "Khongoroo's favorite"});
  // }

  return (
    <>
      <div className={styles.body}>
        {console.log(data)}
        {data.map(({ image, id, name }) => (
          <div className={styles.card}>
            <img src={image} className={styles.cat}></img>
            <p>{name}</p>
            <p className={styles.pp}>
              Keep calm and focus whit abmient and post-rock music
            </p>
            <button  className={styles.base}>
              update
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
// onClick={() => updatePlaylist(id)}

import styles from "../styles/Search.module.css";
import { Left, Main } from ".";
export const Search = () => {
  const Songs = [
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/3/38/Sam_Smith_and_Kim_Petras_-_Unholy.png?20220923153114",
      p: "2022 wrapped",
    },
    {
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/en/b/b9/Taylor_Swift_-_Anti-Hero.png",
      p: "podcasts",
    },

    {
      imgSrc:
        "https://i.scdn.co/image/ab67616d0000b273c9f744b0d62da795bc21d04a ",
      p: "made for you",
    },
    {
      imgSrc:
        "https://m.media-amazon.com/images/M/MV5BNjA2ZTljYjUtZTg5Yy00MDg0LTk3NTItNjllOWNjZWI2OTczXkEyXkFqcGdeQXVyMTI1Mzg0ODA5._V1_FMjpg_UX1000_.jpg",
      p: "new releases",
    },
    {
      imgSrc:
        "https://images.genius.com/d98059a0f2afd10b04b912355c0e8ceb.1000x1000x1.png",
      p: "pop",
    },
    {
      imgSrc:
        "https://i.scdn.co/image/ab67616d0000b2731630dd349221a35ce03a0ccf",
      p: "hip-pop",
    },
    {
      imgSrc:
        "https://ih1.redbubble.net/image.4377649425.0048/poster,504x498,f8f8f8-pad,600x600,f8f8f8.u1.jpg",
      p: "rock",
    },
    {
      imgSrc:
        "https://i.scdn.co/image/ab67616d0000b27322f21ef4e9da48c31170a418",
      p: "latin",
    },
    {
      imgSrc:
        "https://i1.sndcdn.com/artworks-WbrlIdsV7ZsTU0RP-dNJrTQ-t500x500.jpg",
      p: "mood",
    },
    {
      imgSrc:
        "https://cdn.alivenetwork.com/images/bands/jackfrancis-march20-1-300x300@2x.jpg",
      p: "trend",
    },
    {
      imgSrc:
        "https://www.cheatsheet.com/wp-content/uploads/2020/01/BillieEilishtosingJamesBond.jpg",
      p: "jazz",
    },
    {
      imgSrc:
        "https://static01.nyt.com/images/2018/06/19/arts/19xxx/19xxx-superJumbo-v2.jpg",
      p: "metal",
    },
    {
      imgSrc:
        "https://media.glamourmagazine.co.uk/photos/6362592fae3f2809c67050dd/1:1/w_1920,h_1920,c_limit/ADELEPRONUNCIATION%20021122%20default-sq-GettyImages-1369415958.jpg",
      p: "romance",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1590418606746-018840f9cd0f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG5pZ2h0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      p: "sleep",
    },
    {
      imgSrc:
        "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3MTAwNTIzNDc5MTE1MDY1/lana-del-rey-attends-the-60th-annual-grammy-awards-at-madison-square-garden-on-january-28-2018-in-new-york-city-photo-by-dimitrios-kambouris_getty-images-for-naras-square.jpg",
      p: "party",
    },
  ];
  return (
    <div className={styles.search}>
      <div className={styles.inpu}>
        <input
          className={styles.input}
          placeholder="What do you want to listen to?"
        ></input>
        <h2>Browse all</h2>
      </div>
      <div className={styles.fell}>
        {Songs &&
          Songs.map((song, index) => (
            <div>
              <div className={styles.fall}>
                <div className={styles.pp}>{song.p}</div>
                <img src={song.imgSrc} className={styles.size}></img>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

import styles from "../styles/Lenght.module.css";
import { Left, Main } from ".";
export const Lenght = () => {
  const Songs = [
    {
      imgSrc:
        "https://seed-mix-image.spotifycdn.com/v6/img/artist/7Ln80lUS6He07XvHI8qqHH/en/large",
      p: "Arctic Monkeys mix",
      h: "Lana del rey, Conan gray, Imagine dragons",
    },
    {
      imgSrc:
        "https://seed-mix-image.spotifycdn.com/v6/img/artist/00FQb4jTyendYWaN8pK0wa/en/large",
      p: "Lana del rey mix",
      h: "Arctic Monkeys, Conan gray, Imagine dragons",
    },

    {
      imgSrc:
        "https://seed-mix-image.spotifycdn.com/v6/img/artist/15UsOTVnJzReFVN1VCnxy4/en/large",
      p: "XXXTENTACTION",
      h: "Arctic Monkeys, Conan gray, Imagine dragons",
    },
    {
      imgSrc:
        "https://seed-mix-image.spotifycdn.com/v6/img/artist/7dGJo4pcD2V6oG8kP0tJRR/en/large",
      p: "Eminem",
      h: "Arctic Monkeys, Conan gray, Imagine dragons",
    },
    {
      imgSrc:
        "https://seed-mix-image.spotifycdn.com/v6/img/artist/77SW9BnxLY8rJ0RciFqkHh/en/large",
      p: "Conan gray",
      h: "Arctic Monkeys, Conan gray, Imagine dragons",
    },
    {
      imgSrc:
      "https://seed-mix-image.spotifycdn.com/v6/img/artist/53XhwfbYqKCa1cC15pYq2q/en/large",
      p: "Imagine dragons",
      h: "Arctic Monkeys, Conan gray, Imagine dragons",
    },
    
  ];
  return (
    
      <div className={styles.flex}>
        {Songs &&
          Songs.map((song, index) => (
          <div>
            <div className={styles.card}>
              <img src={song.imgSrc} className={styles.cat}></img>
              <div >
              <div className={styles.p}>{song.p}</div>
              <div className={styles.h}>{song.h}</div>
              </div>
              
            </div>
          </div>
          ))}
      </div>
    
  );
};

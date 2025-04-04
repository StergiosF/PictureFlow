import styles from "./ImageResult.module.css";
import useApp from "../../context/useApp";

import { IoHeartSharp } from "react-icons/io5";

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}

function ImageResult() {
  const { result } = useApp();

  const { image, user } = result;

  const formattedDate = formatDate(image.date);

  return (
    <div className={styles.imageResult}>
      <div className={styles.imageContainer}>
        <div className={styles.userContainer}>
          <div className={styles.userDetails}>
            <div className={styles.smallInfo}>
              <img
                src={user.image}
                alt="photographer profile photo"
                className={styles.profileImage}
              />
              <div>
                <p className={styles.name}>{user.name}</p>
                <p className={styles.username}>
                  {user.username ? user.username : "No username"}
                </p>
              </div>
            </div>
          </div>
          <a href={user.link} target="_blank" className={styles.linkBtn}>
            Unsplash Profile
          </a>
        </div>

        <img src={image.url} alt={image.alt} className={styles.image} />
        <div>
          <div className={styles.imageDetails}>
            <p className={styles.description}>
              {image.description ? image.description : "No description"}
            </p>
            <div className={styles.likes}>
              <IoHeartSharp size={32} color="#e31b23" />
              <span>{image.likes}</span>
            </div>
          </div>
          <p className={styles.date}>{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageResult;

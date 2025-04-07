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
    hour12: true,
  });
}

function ImageResult() {
  // 1. Context Access
  const { result } = useApp();

  const { image, user } = result;

  // 2. Date Formatting
  const formattedDate = formatDate(image.date);

  return (
    <div className={styles.imageResult}>
      <div className={styles.imageContainer}>
        {/* User Profile Section */}
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

          {/* Unsplash Profile Link */}
          <a href={user.link} target="_blank" className={styles.linkBtn}>
            Unsplash Profile
          </a>
        </div>

        {/* Main Image Display */}
        <img src={image.url} alt={image.alt} className={styles.image} />
        <div>
          <div className={styles.imageDetails}>
            <p className={styles.description}>
              {image.description ? image.description : "No description"}
            </p>
            <div className={styles.likes}>
              <IoHeartSharp size={28} color="#e31b23" />
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

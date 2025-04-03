import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img src="logo.png" alt="logo" className={styles.logo} />
      <p className={styles.logoText}>PictureFlow</p>
    </div>
  );
}

export default Logo;

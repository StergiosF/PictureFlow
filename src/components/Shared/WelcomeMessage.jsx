import styles from "./WelcomeMessage.module.css";

function WelcomeMessage() {
  return (
    <p className={styles.welcomeMessage}>
      Welcome👋 Start by searching for an image!
    </p>
  );
}

export default WelcomeMessage;

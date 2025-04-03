import useApp from "../../context/useApp";
import styles from "./ErrorMessage.module.css";

function ErrorMessage() {
  const { error } = useApp();

  return <p className={styles.errorMessage}>{error} 💥</p>;
}

export default ErrorMessage;

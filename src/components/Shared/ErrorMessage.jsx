import useApp from "../../context/useApp";
import styles from "./ErrorMessage.module.css";

function ErrorMessage() {
  const { error } = useApp();

  return <h3 className={styles.errorMessage}>{error} 💥</h3>;
}

export default ErrorMessage;

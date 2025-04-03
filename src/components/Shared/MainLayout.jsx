import useApp from "../../context/useApp";
import ImageResult from "../ImageResult/ImageResult";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import styles from "./MainLayout.module.css";

function MainLayout() {
  const { isLoading, error } = useApp();

  return (
    <main className={styles.mainLayout}>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {!isLoading && !error && <ImageResult />}
    </main>
  );
}

export default MainLayout;

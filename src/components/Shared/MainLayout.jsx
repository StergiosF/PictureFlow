import useApp from "../../context/useApp";
import SearchedImage from "../ImageGallery/SearchedImage";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import styles from "./MainLayout.module.css";

function MainLayout() {
  const { isLoading, error } = useApp();

  return (
    <div className={styles.mainLayout}>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {!isLoading && !error && <SearchedImage />}
    </div>
  );
}

export default MainLayout;

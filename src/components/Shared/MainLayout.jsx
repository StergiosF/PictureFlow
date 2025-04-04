import { useEffect } from "react";
import useApp from "../../context/useApp";
import ImageResult from "../ImageResult/ImageResult";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import styles from "./MainLayout.module.css";
import unsplashAPI from "../../api/unsplashAPI";
import Filters from "../Filters/Filters";
import WelcomeMessage from "./WelcomeMessage";

function MainLayout() {
  const { search, color, orientation, isLoading, result, error, dispatch } =
    useApp();

  useEffect(() => {
    if (!search) return;

    async function getImage() {
      try {
        const fetchedResult = await unsplashAPI.fetchDetails(
          search,
          color,
          orientation
        );
        dispatch({
          type: "SEARCH_SUCCESS",
          payload: {
            image: {
              url: fetchedResult.urls.regular,
              date: fetchedResult.created_at,
              description: fetchedResult.description,
              likes: fetchedResult.likes,
            },
            user: {
              name: fetchedResult.user.name,
              link: fetchedResult.user.links.html,
              image: fetchedResult.user.profile_image.medium,
            },
          },
        });
      } catch (error) {
        dispatch({ type: "SEARCH_ERROR", payload: error.message });
      }
    }

    getImage();
  }, [search, color, orientation, dispatch]);

  return (
    <main className={styles.mainLayout}>
      <Filters />

      <div className={styles.resultContainer}>
        {!result && !isLoading && !error && <WelcomeMessage />}
        {isLoading && <Loader />}
        {error && <ErrorMessage />}
        {result && !isLoading && !error && <ImageResult />}
      </div>
    </main>
  );
}

export default MainLayout;

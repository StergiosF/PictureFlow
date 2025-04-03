import { useEffect } from "react";
import useApp from "../../context/useApp";
import ImageResult from "../ImageResult/ImageResult";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";
import styles from "./MainLayout.module.css";
import unsplashAPI from "../../api/unsplashAPI";

function MainLayout() {
  const { search, isLoading, error, dispatch } = useApp();

  useEffect(() => {
    if (!search) return;

    async function getImage() {
      try {
        const fetchedResult = await unsplashAPI.fetchDetails(search);
        dispatch({
          type: "SEARCH_SUCCESS",
          payload: {
            image: {
              url: fetchedResult.urls.full,
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
  }, [search, dispatch]);

  return (
    <main className={styles.mainLayout}>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {!isLoading && !error && <ImageResult />}
    </main>
  );
}

export default MainLayout;

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
  // 1. Context Consumption
  // Destructure all needed values from AppContext
  const { search, color, orientation, isLoading, result, error, dispatch } =
    useApp();

  // 2. Data Fetching Effect
  // Handles API calls when search parameters change
  useEffect(() => {
    // Skip if no search query exists
    if (!search) return;

    // Async function for API call
    async function getImage() {
      try {
        // Fetch image details from Unsplash API
        const fetchedResult = await unsplashAPI.fetchDetails(
          search,
          color,
          orientation
        );

        // Transform API response into app-friendly format
        dispatch({
          type: "SEARCH_SUCCESS",
          payload: {
            image: {
              url: fetchedResult.urls.regular,
              date: fetchedResult.created_at,
              description: fetchedResult.description,
              alt: fetchedResult.alt_description || "Unsplash photo",
              likes: fetchedResult.likes,
            },
            user: {
              name: fetchedResult.user.name,
              username: fetchedResult.user.username,
              link: fetchedResult.user.links.html,
              image: fetchedResult.user.profile_image.medium,
            },
          },
        });
      } catch (error) {
        // Handle API errors
        dispatch({
          type: "SEARCH_ERROR",
          payload: error.message || "Failed to fetch image",
        });
      }
    }

    // Execute the API call
    getImage();
  }, [search, color, orientation, dispatch]);

  // 3. Render Logic
  return (
    <main className={styles.mainLayout}>
      {/* Filter controls component */}
      <Filters />

      {/* Results display area */}
      <div className={styles.resultContainer}>
        {/* Initial welcome state */}
        {!result && !isLoading && !error && <WelcomeMessage />}
        {/* Loading state */}
        {isLoading && <Loader />}
        {/* Error state */}
        {error && <ErrorMessage error={error} />} {/* Pass error prop */}
        {/* Success state */}
        {result && !isLoading && !error && <ImageResult data={result} />}
      </div>
    </main>
  );
}

export default MainLayout;

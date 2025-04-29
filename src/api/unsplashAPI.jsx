/**
 * Unsplash API Service Module
 * Handles image searches and retrieval from Unsplash API
 */

// Base URL for Unsplash API endpoints
const BASE_URL = "https://api.unsplash.com";

// Default headers for API requests
const headers = {
  // Authorization header with API key from environment variables
  Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
  // Specifies API version to use
  "Accept-Version": "v1",
};

function getRandomImage(images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

async function fetchDetails(query, color, orientation) {
  // Artificial delay for better UX
  const delayPromise = new Promise((resolve) => setTimeout(resolve, 500));
  await delayPromise;

  // API URL with query parameters
  let url = `${BASE_URL}/search/photos?query=${query}&per_page=30`;
  if (orientation) url += `&orientation=${orientation}`;
  if (color) url += `&color=${color}`;

  // API request
  const res = await fetch(url, {
    headers,
  });

  //  HTTP errors
  if (!res.ok) throw new Error(`Failed to fetch photos (${res.status})`);

  // Response data
  const data = await res.json();

  // Check for empty results
  if (data.results.length === 0) {
    throw new Error("No images found matching your search");
  }

  // Select random image from results
  const randomImage = getRandomImage(data.results);

  // Preload both main image and user profile image
  await Promise.all([
    new Promise((resolve) => {
      const img = new Image();
      img.src = randomImage.urls.regular;
      img.onload = resolve;
      img.onerror = resolve;
    }),
    new Promise((resolve) => {
      const img = new Image();
      img.src = randomImage.user.profile_image.medium;
      img.onload = resolve;
      img.onerror = resolve;
    }),
  ]);

  return randomImage;
}

// Export API service methods
export default { fetchDetails };

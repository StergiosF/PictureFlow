const BASE_URL = "https://api.unsplash.com";

const headers = {
  Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
  "Accept-Version": "v1",
};

function getRandomImage(images) {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

async function fetchDetails(query, orientation, color) {
  const delayPromise = new Promise((resolve) => setTimeout(resolve, 500));
  await delayPromise;

  let url = `${BASE_URL}/search/photos?query=${query}`;
  if (orientation) url += `&orientation=${orientation}`;
  if (color) url += `&color=${color}`;

  const res = await fetch(url, {
    headers,
  });

  if (!res.ok) throw new Error(`Failed to fetch photos (${res.status})`);

  const data = await res.json();

  if (data.results.length === 0) {
    throw new Error("No results found");
  }

  const randomImage = getRandomImage(data.results);
  return randomImage;
}

export default { fetchDetails };

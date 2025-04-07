# 🎞️ PictureFlow

PictureFlow is a single-page web application built with Vite and React that lets you search for and display stunning photos from Unsplash. With PictureFlow you can enter a search term—and optionally specify the preferred photo orientation and color—to have one randomly chosen image from the results displayed.

## Deployment

Deployed Website: [https://pictureflow-yourdeploymenturl.netlify.app](https://pictureflow-yourdeploymenturl.netlify.app)

## About The Project

[![Results Page Preview](previews/results_page.png)](https://pictureflow-yourdeploymenturl.netlify.app)

PictureFlow is designed for photography enthusiasts who want a simple yet powerful interface to explore and discover images. Using the Unsplash API, PictureFlow retrieves high-quality images based on your search criteria. Optional filters for orientation and color allow you to refine your search, and the application handles any network issues by displaying a user-friendly error message.

## Features

- **Simple Search Interface:** Enter a keyword to fetch images from Unsplash.
- **Optional Filters:** Specify your desired photo orientation and color.
- **Random Selection:** One photo is randomly selected from the search results.
- **Robust Error Handling:** Displays informative error messages when something goes wrong.

## Usage

1. **Search for an Image:**  
   Enter a search term into the search bar and click the action button.

2. **Apply Filters (Optional):**  
   Use the orientation and color filters to narrow down your results.

3. **View Your Photo:**  
   A single, randomly selected image from Unsplash will be displayed, along with details like the description, date, number of likes, and the photographer’s information.

4. **Explore Photographer Profiles:**  
   Click the provided link to visit the photographer’s Unsplash profile.

### Built With

This app is built using React and modern front-end tools and libraries:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your system.

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/StergiosF/PictureFlow
   ```

2. Navigate to the project directory:

   ```bash
   cd PictureFlow
   ```

3. Install NPM packages:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

You also need an **Unsplash Access Key**:
1. Create a free account at [Unsplash](https://unsplash.com/join).
2. Create a new application to obtain an **Access Key**.
3. Set up a `.env` file in the root of this project with the following variable:

   ```bash
   VITE_UNSPLASH_ACCESS_KEY = YOUR_ACCESS_KEY

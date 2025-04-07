import { useState } from "react";
import styles from "./Filters.module.css";
import useApp from "../../context/useApp";

function Filters() {
  // 1. Local State Management
  const [color, setColor] = useState("");
  const [orientation, setOrientation] = useState("");

  // 2. Context Access
  const { search, dispatch } = useApp();

  // 3. Filter Application Handler
  function applyFilters(e) {
    e.preventDefault();

    if (!search) {
      alert("Search for an image first");
      return;
    }
    dispatch({
      type: "SEARCH_START",
      payload: { search, color, orientation },
    });
  }

  // 4. Reset Filters
  function resetFilters() {
    setColor("");
    setOrientation("");
    if (search) {
      dispatch({
        type: "SEARCH_START",
        payload: { search, color: undefined, orientation: undefined },
      });
    }
  }

  // 5. Footer Year
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filters}>
        {/* Color Filter */}
        <div className={styles.color}>
          <label htmlFor="color">Color</label>
          <select
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          >
            <option value="">Not Selected</option>
            <option value="black_and_white">Black and White</option>
            <option value="black">Black</option>
            <option value="white">White</option>
            <option value="yellow">Yellow</option>
            <option value="orange">Orange</option>
            <option value="red">Red</option>
            <option value="purple">Purple</option>
            <option value="magenta">Magenta</option>
            <option value="green">Green</option>
            <option value="teal">Teal</option>
            <option value="blue">Blue</option>
          </select>
        </div>

        {/* Orientation Filter */}
        <div className={styles.orientation}>
          <label htmlFor="orientation">Orientation</label>
          <select
            id="orientation"
            value={orientation}
            onChange={(e) => setOrientation(e.target.value)}
          >
            <option value="">Not Selected</option>
            <option value="landscape">Landscape</option>
            <option value="portrait">Portrait</option>
            <option value="squarish">Squarish</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className={styles.buttonGroup}>
          {(color || orientation) && (
            <>
              <button
                type="button"
                onClick={applyFilters}
                className={styles.filtersButton}
                disabled={!search}
                aria-label="Apply filters"
              >
                Apply Filters
              </button>
              <button
                type="button"
                onClick={resetFilters}
                className={`${styles.filtersButton} ${styles.resetButton}`}
                aria-label="Reset filters"
              >
                Reset
              </button>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.copyright}>
        <p>&#169; {year} - PictureFlow</p>
        <p>All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Filters;

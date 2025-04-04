import { useState } from "react";
import styles from "./Filters.module.css";
import useApp from "../../context/useApp";

function Filters() {
  const [color, setColor] = useState("");
  const [orientation, setOrientation] = useState("");

  const { search, dispatch } = useApp();

  function applyFilters(e) {
    e.preventDefault();

    if (!search) return;
    dispatch({ type: "SEARCH_START", payload: { search, color, orientation } });
  }

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.filters}>
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
        <button
          className={styles.applyFilters}
          onClick={(e) => applyFilters(e)}
        >
          Apply Filters
        </button>
      </div>
      <div className={styles.copyright}>
        <p>&#169; {year} - PictureFlow</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  );
}

export default Filters;

import styles from "./SearchButton.module.css";

import { IoSearch } from "react-icons/io5";

function SearchButton() {
  return (
    <button className={styles.searchButton} type="submit">
      <IoSearch />
    </button>
  );
}

export default SearchButton;

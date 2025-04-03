import styles from "./SearchButton.module.css";

import { IoSearch } from "react-icons/io5";

function SearchButton({ onSearch }) {
  return (
    <button className={styles.searchButton} onClick={onSearch}>
      <IoSearch />
    </button>
  );
}

export default SearchButton;

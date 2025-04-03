import { useRef, useState } from "react";
import useApp from "../../context/useApp";
import styles from "./SearchInput.module.css";

function SearchInput() {
  const [search, setSearch] = useState("");
  const { isLoading, dispatch } = useApp();
  const inputRef = useRef(null);

  function onSearch(e) {
    e.preventDefault();
    dispatch({ type: "SEARCH_START", payload: search });
    setSearch("");
    inputRef.current.blur(); // Remove focus
  }

  return (
    <form onSubmit={(e) => onSearch(e)}>
      <input
        ref={inputRef}
        type="text"
        value={search}
        placeholder={isLoading ? "Searching..." : "Search for an image..."}
        className={styles.searchInput}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default SearchInput;

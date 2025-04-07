import { useRef, useState } from "react";
import useApp from "../../context/useApp";
import styles from "./SearchInput.module.css";
import SearchButton from "./SearchButton";

function SearchInput() {
  // 1. Local State Management
  const [search, setSearch] = useState(""); // Tracks input field value

  // 2. Context Access
  const { isLoading, dispatch } = useApp(); // Gets global state methods

  // 3. DOM Reference
  const inputRef = useRef(null); // Reference to input element

  // 4. Search Handler
  function handleSearch(e) {
    e.preventDefault();

    // Validate input
    if (!search.trim()) return; // Prevent empty searches

    // Dispatch search action
    dispatch({
      type: "SEARCH_START",
      payload: {
        search: search.trim(), // Trim whitespace
        color: "",
        orientation: "",
      },
    });

    // Reset input field
    setSearch("");
    inputRef.current.blur();
  }

  return (
    <form onSubmit={handleSearch} className={styles.searchForm} role="search">
      <input
        ref={inputRef}
        type="text"
        value={search}
        placeholder={isLoading ? "Searching..." : "Search for an image..."}
        className={styles.searchInput}
        onChange={(e) => setSearch(e.target.value)}
        aria-label="Search images" // Accessibility
        disabled={isLoading} // Disable during loading
      />
      <SearchButton disabled={isLoading} />
    </form>
  );
}

export default SearchInput;

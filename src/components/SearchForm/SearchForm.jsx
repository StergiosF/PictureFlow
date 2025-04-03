import styles from "./SearchForm.module.css";
import Logo from "../Shared/Logo";
import SearchInput from "./SearchInput";

function SearchForm() {
  return (
    <nav className={styles.searchForm}>
      <div className={styles.innerContainer}>
        <Logo />
        <SearchInput />
      </div>
    </nav>
  );
}

export default SearchForm;

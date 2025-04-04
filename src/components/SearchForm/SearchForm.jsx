import styles from "./SearchForm.module.css";
import Logo from "../Shared/Logo";
import SearchInput from "./SearchInput";

function SearchForm() {
  return (
    <header className={styles.searchForm}>
      <nav>
        <div className={styles.innerContainer}>
          <Logo />
          <SearchInput />
        </div>
      </nav>
    </header>
  );
}

export default SearchForm;

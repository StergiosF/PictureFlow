import styles from "./SearchForm.module.css";
import Logo from "../Shared/Logo";

function SearchForm() {
  return (
    <nav className={styles.searchForm}>
      <div className={styles.innerContainer}>
        <Logo />
      </div>
    </nav>
  );
}

export default SearchForm;

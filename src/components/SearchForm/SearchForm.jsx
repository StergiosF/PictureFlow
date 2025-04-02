import styles from "./SearchForm.module.css";
import Logo from "../Shared/Logo";

function SearchForm() {
  return (
    <nav className={styles.searchForm}>
      <Logo />
    </nav>
  );
}

export default SearchForm;

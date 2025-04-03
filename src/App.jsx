import styles from "./App.module.css";
import SearchForm from "./components/SearchForm/SearchForm";
import MainLayout from "./components/Shared/MainLayout";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <div className={styles.app}>
        <SearchForm />
        <MainLayout />
      </div>
    </AppProvider>
  );
}

export default App;

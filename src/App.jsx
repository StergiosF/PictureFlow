import styles from "./App.module.css";
import { ImageProvider } from "./context/ImageContext";

function App() {
  return (
    <ImageProvider>
      <div className={styles.app}></div>
    </ImageProvider>
  );
}

export default App;

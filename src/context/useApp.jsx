import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function useApp() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("AppContext was used outside the AppProvider");
  return context;
}

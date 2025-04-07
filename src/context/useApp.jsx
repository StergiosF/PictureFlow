import { useContext } from "react";
import { AppContext } from "./AppContext";

// Custom hook for accessing the AppContext

export default function useApp() {
  // 1. Access Context
  // Retrieves the nearest AppContext value up the component tree
  const context = useContext(AppContext);

  // 2. Safety Check
  // Ensures the hook is used within an AppProvider
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }

  // 3. Return Context
  // Provides access to all context values and methods
  return context;
}

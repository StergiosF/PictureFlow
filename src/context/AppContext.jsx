import { createContext, useReducer } from "react";

// 1. Create Context
// This creates a new context object that will be used to share state across components
const AppContext = createContext();

// 2. Initial State
// Defines the default state structure for our application
const initialState = {
  search: "", // Stores the search query string
  color: "", // Stores selected color filter
  orientation: "", // Stores selected orientation filter
  result: null, // Will hold the API response data
  isLoading: false, // Tracks loading state
  error: "", // Stores error messages
};

// 3. Reducer Function
// Handles state transitions based on dispatched actions
function reducer(state, action) {
  switch (action.type) {
    case "SEARCH_START":
      // When search begins, update filters and set loading state
      return {
        ...state,
        isLoading: true,
        error: "", // Clear previous errors
        search: action.payload.search,
        color: action.payload.color,
        orientation: action.payload.orientation,
      };

    case "SEARCH_SUCCESS":
      // When search succeeds, store result and clear loading state
      return {
        ...state,
        isLoading: false,
        result: action.payload,
      };

    case "SEARCH_ERROR":
      // When search fails, store error and reset search parameters
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        search: "",
        color: "",
        orientation: "",
      };

    default:
      // Always return current state for unknown actions
      return state;
  }
}

// 4. Context Provider Component
// Wraps the application and provides state to all child components
function AppProvider({ children }) {
  // Use reducer to manage complex state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Destructure state for easier access
  const { search, color, orientation, result, isLoading, error } = state;

  return (
    <AppContext.Provider
      value={{
        // Provide all state values and dispatch function to consumers
        search,
        color,
        orientation,
        result,
        isLoading,
        error,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

// Export the context and provider for use in other files
export { AppContext, AppProvider };

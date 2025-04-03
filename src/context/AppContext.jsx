import { createContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  search: "",
  result: null,
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SEARCH_START":
      return {
        ...state,
        isLoading: true,
        error: null,
        search: action.payload,
      };
    case "SEARCH_SUCCESS":
      return { ...state, isLoading: false, result: action.payload, search: "" };
    case "SEARCH_ERROR":
      return { ...state, isLoading: false, error: action.payload, search: "" };
    default:
      return state;
  }
}

function AppProvider({ children }) {
  const [{ search, result, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <AppContext.Provider value={{ search, result, isLoading, error, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };

import { createContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  search: "",
  color: "",
  orientation: "",

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
        search: action.payload.search,
        color: action.payload.color,
        orientation: action.payload.orientation,
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        result: action.payload,
      };
    case "SEARCH_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        search: "",
        color: "",
        orientation: "",
      };
    default:
      return state;
  }
}

function AppProvider({ children }) {
  const [{ search, color, orientation, result, isLoading, error }, dispatch] =
    useReducer(reducer, initialState);

  return (
    <AppContext.Provider
      value={{ search, color, orientation, result, isLoading, error, dispatch }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };

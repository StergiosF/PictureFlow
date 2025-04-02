import { createContext, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  image: null,
  isLoading: false,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SEARCH_START":
      return { ...state, isLoading: true, error: null };
    case "SEARCH_SUCCESS":
      return { ...state, isLoading: false, image: action.payload };
    case "SEARCH_ERROR":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}

function AppProvider({ children }) {
  const [{ image, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <AppContext.Provider value={{ image, isLoading, error, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };

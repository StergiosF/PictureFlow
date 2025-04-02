import { createContext, useContext, useReducer } from "react";

const ImageContext = createContext();

const initialState = {
  image: null,
  isLoading: false,
  error: null,
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

export function ImageProvider({ children }) {
  const [{ image, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <ImageContext.Provider value={{ image, isLoading, error, dispatch }}>
      {children}
    </ImageContext.Provider>
  );
}

export function useImage() {
  const context = useContext(ImageContext);
  if (context === undefined)
    throw new Error("ImageContext was used outside the ImageProvider");
  return context;
}

import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import LangReducer from "./LangSlice";
import LoaderSlice from "./LoaderSlice";
export const store = configureStore({
  reducer: {
    theme: themeReducer,
    lang: LangReducer,
    loader: LoaderSlice,
  },
});

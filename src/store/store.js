import { configureStore } from "@reduxjs/toolkit";
// import { createStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import LangReducer from "./LangSlice";
export default configureStore({
  reducer: {
    theme: themeReducer,
    lang: LangReducer,
  },
});

// const themeReducer = (state = { theme: "light" }, action) => {
//   if (action.type === "SET_THEME") {
//     return {
//       theme: action.payload,
//     };
//   }

//   if (action.type === "TOGGLE_THEME") {
//     return {
//       theme: state.theme === "light" ? "dark" : "light",
//     };
//   }

//   if (action.type === "RESET_THEME") {
//     return {
//       theme: "light",
//     };
//   }

//   return state;
// };

// const store = createStore(themeReducer);
// export default store;

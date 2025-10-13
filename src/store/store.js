// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "@reduxjs/toolkit";

// export default configureStore({
//   reducer: {},
// });

const themeReducer = (state = { theme: "light" }, action) => {
  if (action.type === "SET_THEME") {
    return {
      theme: action.payload,
    };
  }

  if (action.type === "TOGGLE_THEME") {
    return {
      theme: state.theme === "light" ? "dark" : "light",
    };
  }

  if (action.type === "RESET_THEME") {
    return {
      theme: "light",
    };
  }

  return state;
};

const store = createStore(themeReducer);
export default store;

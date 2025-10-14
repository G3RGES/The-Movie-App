// themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "light", // or "dark"
  },
  reducers: {
    toggleThemeMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setThemeMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const { toggleThemeMode, setThemeMode } = themeSlice.actions;
export default themeSlice.reducer;

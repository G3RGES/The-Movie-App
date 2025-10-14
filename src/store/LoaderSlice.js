import { createSlice } from "@reduxjs/toolkit";

const LoaderSlice = createSlice({
  name: "loader",
  initialState: {
    isLoading: false,
  },
  reducers: {
    // startLoading: (state) => {
    //   state.isLoading = true;
    // },
    // stopLoading: (state) => {
    //   state.isLoading = false;
    // },

    changeLoaderState: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { changeLoaderState } = LoaderSlice.actions;
export default LoaderSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../AxiosInstance";

export const moviesAction = createAsyncThunk(
  "movies/fetch",
  async (page = 1) => {
    const res = await axiosInstance.get(
      `/movie/popular?api_key=d4b6bc723ac291b078823a9b64bd3e08&page=${page}`
    );
    console.log(res.data.results);

    return res.data.results;
  }
);
const MoviesSlice = createSlice({
  name: "movies",
  initialState: { movies: [] },
  extraReducers: (builder) => {
    // builder.addCase(moviesAction.pending, (state, action) => {
    //   state.movies = [];
    // });

    builder.addCase(moviesAction.fulfilled, (state, action) => {
      state.movies = action.payload;
    });

    // builder.addCase(moviesAction.rejected, (state, action) => {
    //   state.movies = [];
    // });
  },
});

export const { movies } = MoviesSlice.actions;
export default MoviesSlice.reducer;

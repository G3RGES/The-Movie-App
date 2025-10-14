import { createSlice } from "@reduxjs/toolkit";

const FavouriteSlice = createSlice({
  name: "favourite",
  initialState: { movies: [] },
  reducers: {
    // addFavourite: (state, action) => {
    //   state.movies.push(action.payload);
    // },
    addFavourite: (state, action) => {
      const exists = state.movies.find((m) => m.id === action.payload.id);
      if (!exists) state.movies.push(action.payload);
    },
    removeFavourite: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addFavourite, removeFavourite } = FavouriteSlice.actions;
export default FavouriteSlice.reducer;

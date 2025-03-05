import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie, SelectedMovie } from "../types";

interface MovieState {
  selectedMovies: Array<SelectedMovie>;
}

const initialState: MovieState = {
  selectedMovies: [],
};

const moviesSlices = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addSelectedMovie: (state, action: PayloadAction<Movie>) => {
      const isMovieOnList = state.selectedMovies.some((movie) => movie.id === action.payload.id);

      if (!isMovieOnList) {
        state.selectedMovies.push({ ...action.payload, addedAt: Date.now() });
      }
    },
    removeSelectedMovie: (state, action: PayloadAction<number>) => {
      state.selectedMovies = state.selectedMovies.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { addSelectedMovie, removeSelectedMovie } = moviesSlices.actions;

export default moviesSlices.reducer;

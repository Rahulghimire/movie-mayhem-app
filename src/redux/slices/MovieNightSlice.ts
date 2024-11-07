import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Movie {
  id: string;
  title: string;
}

export interface MovieNightState {
  data: Movie[];
}

const initialState: MovieNightState = {
  data: [],
};

const movieNightSlice = createSlice({
  name: "movieDataSlice",
  initialState,
  reducers: {
    addMovieNight: (state, action: PayloadAction<Movie>) => {
      const exists = state.data.some((movie) => movie.id === action.payload.id);
      if (!exists) {
        state.data.push(action.payload);
      }
    },
    removeMovieNight: (state, action: PayloadAction<string>) => {
      console.log("Fsdfdsdsdf", state, action);
      state.data = state.data.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { addMovieNight, removeMovieNight } = movieNightSlice.actions;
export default movieNightSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearchView: false,
    gptMovieResults: null,
    gptMovieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearchView = !state.showGptSearchView;
    },
    addGptMovieResults: (state, action) => {
      const { movieResults, movieNames } = action.payload;
      state.gptMovieResults = movieResults;
      state.gptMovieNames = movieNames;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResults } =
  gptSearchSlice.actions;

export default gptSearchSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearchView: false,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearchView = !state.showGptSearchView;
    },
  },
});

export const { toggleGptSearchView } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;

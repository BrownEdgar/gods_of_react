import { createSlice } from "@reduxjs/toolkit";

const todotSlice = createSlice({
  name: "todos",
  initialState: 0,
  reducers: {
    saveTodos(state, action) {
      return action.payload;
    },
  },
});
export default todotSlice.reducer;
export const { saveTodos } = todotSlice.actions;

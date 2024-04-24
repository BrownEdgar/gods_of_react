import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    addCounter(state, action) {
      return state + 1;
    },
    minusCounter(state, action) {
      return state - 1;
    },
    resetCounter(state, action) {
      return 0;
    },
    addRandom(state, action) {
      return action.payload;
    },
  },
});
export default counterSlice.reducer;
export const { addCounter, minusCounter, resetCounter, addRandom } =
  counterSlice.actions;

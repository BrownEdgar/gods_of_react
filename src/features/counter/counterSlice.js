import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    addCounter: (state) => {
      return state + 1
    },
    decrement: (state) => {
      return state - 1;
    }
  }
})

export default counterSlice.reducer
export const { addCounter, decrement } = counterSlice.actions
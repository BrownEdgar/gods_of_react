import { createAction, createSlice } from '@reduxjs/toolkit';

export const setNumber = createAction('liquid/setnumber')

const counterSlice = createSlice({
  name: "counter",
  initialState: 1,
  reducers: {
    addCounter: (state) => {
      return state + 1
    },
    decrement: (state) => {
      return state - 1;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(setNumber, (state, action) => {
      return state + 1
    })
  }
})

export default counterSlice.reducer
export const { addCounter, decrement } = counterSlice.actions
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async () => {
    const response = await axios(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    return response.data;
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    data: [],
    status: "edle",
  },

  selectors: {
    getTodos: (state) => state.data,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncTodos.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getAsyncTodos.fulfilled, (state, action) => {
        state.status = "fullfiled";
        state.data = action.payload;
      })
      .addCase(getAsyncTodos.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      });
  },
});
export default todosSlice.reducer;
export const { saveTodos } = todosSlice.actions;
export const { getTodos } = todosSlice.selectors;

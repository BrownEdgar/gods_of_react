import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncUsers = createAsyncThunk(
  "users/getAsyncUsers",
  async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/users");
    return response.data;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    status: "idle",
  },
  reducers: {
    saveUser(state, { payload: user }) {
      state.push(user);
    },
  },
  selectors: {
    getUsers: (state) => state.data,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncUsers.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getAsyncUsers.fulfilled, (state, action) => {
        state.status = "fullfiled";
        state.data = action.payload;
      })
      .addCase(getAsyncUsers.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});
export default usersSlice.reducer;
export const { saveUser } = usersSlice.actions;
export const { getUsers } = usersSlice.selectors;

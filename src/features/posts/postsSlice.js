import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncPosts = createAsyncThunk(
  "posts/getAsyncPosts",
  async () => {
    const response = await axios(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );
    return response.data;
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    status: "empty",
  },

  selectors: {
    getPosts: (state) => state.data,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncPosts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getAsyncPosts.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })

      .addCase(getAsyncPosts.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error;
      });
  },
});
export default postsSlice.reducer;
export const { savePosts } = postsSlice.actions;
export const { getPosts } = postsSlice.selectors;

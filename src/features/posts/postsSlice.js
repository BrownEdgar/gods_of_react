import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk("posts/getPosts",
 async (postId) => {
  const response = await axios(
    `https://jsonplaceholder.typicode.com/posts${postId}`
  );
  return response.data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      return state.push(action.payload);
     
    });
  },
});

export default postsSlice.reducer;

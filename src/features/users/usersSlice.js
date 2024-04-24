import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAyncUsers = createAsyncThunk('users/getAsyncUsers', async () => {
  const response = await axios('https://jsonplaceholder.typicode.com/users');
  return response.data
})

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    saveUser(state, { payload: user }) {
      state.push(user)
    }
  },
  selectors: {
    getUsers: (state) => state.data
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAyncUsers.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(getAyncUsers.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload
      })
      .addCase(getAyncUsers.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error
      })

  }
})

export default usersSlice.reducer;
export const { saveUser } = usersSlice.actions;
export const { getUsers } = usersSlice.selectors;
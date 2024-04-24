import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '@f/counter/counterSlice';
import postsSlice from '@f/posts/postsSlice';
import usersSlice from '@f/users/usersSlice';
import middleware from '../middlewaries/middleware';


const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsSlice,
    users: usersSlice
  },
  middleware
})

export default store
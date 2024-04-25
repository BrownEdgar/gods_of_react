import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "@f/counter/counterSlice";
import postsSlice from "@f/posts/postsSlice";
import todosSlice from "@f/todos/todosSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postsSlice,
    todos: todosSlice,
    users: usersSlice,
  },
});
export default store;

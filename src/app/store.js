// import counterSlice from "@f/counter/counterSlice";
// import usersSlice from "@f/users/usersSlice";
import todosSlice from "@f/todos/todosSlice";
import postsSlice from "@f/posts/postsSlice";
import { configureStore } from "@reduxjs/toolkit";
// import middleware from "../middleware/middleware";

const store = configureStore({
  reducer: {
    // counter: counterSlice,
    // users: usersSlice,
    posts: postsSlice,
    todos: todosSlice,
  },
});
export default store;

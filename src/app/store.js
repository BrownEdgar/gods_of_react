import counterSlice from "@f/counter/counterSlice";
// import usersSlice from "@f/users/usersSlice";
// import todosSlice from "@f/todos/todosSlice";
import postsSlice from "@f/posts/postsSlice";
import productsSlice from "@f/products/productsSlice";
import { configureStore } from "@reduxjs/toolkit";
// import middleware from "../middleware/middleware";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    // users: usersSlice,
    posts: postsSlice,
    products: productsSlice,
    // todos: todosSlice,
  },
});
export default store;

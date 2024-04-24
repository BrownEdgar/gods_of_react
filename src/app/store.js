import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import postsSlice from "../features/posts/postsSlice";
import tododsSlice from "../features/todos/tododsSlice";

const store = configureStore({
    reducer:{
        counter: counterSlice,
        posts: postsSlice,
        todos: tododsSlice
    }
})
export default store
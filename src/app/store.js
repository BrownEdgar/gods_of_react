import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import postsSlice from "../features/posts/postsSlice";
import tododsSlice from "../features/todos/tododsSlice";
import productsSlice from "../features/products/productsSlice";

const store = configureStore({
    reducer:{
        counter: counterSlice,
        posts: postsSlice,
        todos: tododsSlice,
        products: productsSlice
    }
})
export default store
import { setNumber } from "@f/counter/counterSlice";
import { getPosts } from "@f/posts/postsSlice";
import { getProducts } from "@f/products/productsSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(count));
  }, [count]);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(setNumber())}>set number</button>
    </div>
  );
}

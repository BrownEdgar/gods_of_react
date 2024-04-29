import { setNumber } from "@f/counter/counterSlice";
import { getPosts } from "@f/posts/postsSlice";
import {
  channgeFilter,
  getProducts,
  selectProducts,
} from "@f/products/productsSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const category = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "woman's clothing",
];

export default function App() {
  const count = useSelector((state) => state.counter);
  const products = useSelector(selectProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts(count));
  }, [count]);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleChange = (e) => {
    dispatch(channgeFilter(e.target.value));
  };

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(setNumber())}>set number</button>
      <select name="category" id="category" onChange={handleChange}>
        {category.map((elem) => {
          return (
            <option value={elem} key={elem}>
              {elem}
            </option>
          );
        })}
      </select>
    </div>
  );
}

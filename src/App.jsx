import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import axios from "axios";
import {
  addCounter,
  addRandom,
  minusCounter,
  resetCounter,
} from "@f/counter/counterSlice";
import { saveTodos } from "@f/todos/todosSlice";
import { savePosts } from "@f/posts/postsSlice";

export default function App() {
  const count = useSelector((state) => state.counter);
  const posts = useSelector((state) => state.posts);
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const random = Math.round(Math.random() * 100);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: 4,
      },
    }).then((res) => dispatch(savePosts(res.data)));
  }, []);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/todos", {
      params: {
        _limit: 6,
      },
    }).then((res) => dispatch(saveTodos(res.data)));
  }, []);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(addCounter())}>add count</button>
      <button onClick={() => dispatch(minusCounter())}>minus count</button>
      <button onClick={() => dispatch(resetCounter())}>reset</button>
      <button onClick={() => dispatch(addRandom(random))}>add random</button>
      <h1>Posts</h1>
      <pre>{JSON.stringify(posts, null, 1)}</pre>
      <h1>Todos</h1>
      <pre>{JSON.stringify(todos, null, 1)}</pre>
    </div>
  );
}

import { getAsyncPosts, getPosts } from "@f/posts/postsSlice";
import { getAsyncTodos, getTodos } from "@f/todos/todosSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AppTwo() {
  const [showPosts, setShowPosts] = useState(false);
  const [showTodos, setShowTodos] = useState(false);
  const posts = useSelector(getPosts);
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showPosts) {
      dispatch(getAsyncPosts());
    }
  }, [showPosts]);

  useEffect(() => {
    if (showTodos) {
      dispatch(getAsyncTodos());
    }
  }, [showTodos]);

  const handleClick = () => {
    setShowPosts(true);
  };
  const handleClick2 = () => {
    setShowTodos(true);
  };

  return (
    <div className="AppTwo">
      <h1>Posts</h1>
      <ul>
        {posts.map((elem) => {
          return (
            <li key={elem.id}>
              {elem.id}.{elem.title}
            </li>
          );
        })}
      </ul>
      <button onClick={handleClick}>show posts</button>
      <h1>Todos</h1>
      <ul>
        {todos.map((elem) => {
          return (
            <li key={elem.id}>
              {elem.id}.{elem.title}
            </li>
          );
        })}
      </ul>
      <button onClick={handleClick2}>show todos</button>
    </div>
  );
}

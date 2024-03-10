import React, { useState, useEffect } from "react";
import "./App.scss";
import classNames from "classnames";
export default function App() {
  const [todos, setTodos] = useState([]);
  const [options, setOptions] = useState({
    completed: 0,
    unCompleted: 0,
  });

  useEffect(() => {
    if (todos.length > 0) {
      const obj = {
        completed: 0,
        unCompleted: 0,
      };
      todos.forEach((elem) => {
        elem.completed ? (obj.completed += 1) : (obj.unCompleted += 1);
      });
      setOptions(obj);
    }
  }, [todos]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=40")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const changeTrue = () => {
    const result = todos.map((elem) => {
      elem.completed = true;
      return elem;
    });
    setTodos(result);
  };

  const togleCompleted = (id) => {
    const res = todos.map((elem) => {
      if (elem.id === id) {
        elem.completed = !elem.completed;
      }
      return elem;
    });
    setTodos(res);
  };

  return (
    <div className="App">
      <h1 className="App__title">Our todos</h1>
      <p>
        <button onClick={changeTrue}>x</button>
        complated:<span>{options.completed}</span>
        unComplated:<span>{options.unCompleted}</span>
      </p>
      <div className="App__container">
        {todos.map((elem) => {
          return (
            <div key={elem.id} onClick={() => togleCompleted(elem.id)}>
              <h2>{elem.title}</h2>

              <span
                className={classNames("App__circle", {
                  "App__circle-green": elem.completed,
                  "App__circle-red": !elem.completed,
                })}
              ></span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

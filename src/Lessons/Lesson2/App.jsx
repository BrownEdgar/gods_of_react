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

  const toggleCompleted = (id) => {
    const result = todos.map((elem) => {
      if (elem.id === id) {
        elem.completed = !elem.completed;
      }
      return elem;
    });
    setTodos(result);
  };

  return (
    <div className="App">
      <h1 className="App__title">Our todos</h1>
      <div className="App__header">
        <div className="App__buttons">
          <button>All done</button>
          <button>All undone</button>
          <button>
            sort <i class="bx bxs-sort-alt"></i>
          </button>
        </div>
        <p>
          completed:<span> {options.completed}</span>
          unCompleted:<span>{options.unCompleted}</span>
        </p>
      </div>
      <div className="App__container">
        {todos.map((elem) => {
          return (
            <div key={elem.id} onClick={() => toggleCompleted(elem.id)}>
              <h2>
                {elem.title}
                <span
                  className={classNames("App__circle", {
                    "App__circle-green": elem.completed,
                    "App__circle-red": !elem.completed,
                  })}
                ></span>
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

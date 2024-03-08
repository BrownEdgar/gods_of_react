import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);

  const deleteByIndex = (index) => {
    setTodos(todos.toSpliced(index, 1));
  };
 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div className="App">
      {todos.map((elem, index) => {
        return (
          <div className="Todos" key={elem.id}>
            <div className="Todos__button">
              <button >&#10004;</button>
              <button onClick={() => deleteByIndex(index)}>&#10006;</button>
            </div>
            <h3>{elem.id}</h3>
            <p>{elem.title}</p>
          </div>
        );
      })}
    </div>
  );
}

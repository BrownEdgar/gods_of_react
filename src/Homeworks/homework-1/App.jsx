import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((answer) => setTodos(answer));
  }, []);

  const deleteMe = (id) => {
    const f = todos.filter((elem) => {
      return elem.id !== id;
    });
    setTodos(f);
  };
  return (
    <div className="App">
      {todos.map((elem, index) => {
        return (
          <div className="Todos" key={elem.id}>
            <h2>{elem.title}</h2>
            <button onClick={() => deleteMe(elem.id)}>delete me</button>
          </div>
        );
      })}
    </div>
  );
}
export default App;

import { useState } from "react";
import data from "./data.json";
import "./App.css";

function App() {
  const [users] = useState(data);

  return (
    <div className="App">
      <h1>users</h1>
      {users.map((elem) => {
        return <h2 key={elem.id}>{elem.name}</h2>;
      })}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/ `)
      .then((res) => res.json())
      .then((result) => setPosts(result));
  }, []);

  const handleDelete = (index) => {
    setPosts(posts.toSpliced(index, 1));
  };
  return (
    <div className="App">
      {posts.map((elem, index) => {
        return (
          <div className="Post" key={elem.id}>
            <h2>{elem.title}</h2>
            <p>{elem.body}</p>
            <button onClick={() => handleDelete(index)}>delete me </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;

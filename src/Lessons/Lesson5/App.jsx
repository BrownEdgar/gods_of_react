import React, { useState } from "react";
import './App.scss'

export default function App() {
  const [data, setData] = useState(["html", "css", "javascript", "node.js", "react.js"]);
  const [isOpen, setIsOpen] = useState(false)


  const toggleModal =() => setIsOpen(!isOpen)
  return (
    <div className="App">
        <Modal/>
        <h2 className="App__title">React Modal Example</h2>
      {data.map((elem) => {
        return (
          <div key={elem.id} className="App__item">
            <h2>{elem}</h2>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

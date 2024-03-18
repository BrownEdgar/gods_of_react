import React, { useState } from "react";
import "./App.scss";
import Modal from "../../components/Modal/Modal";

export default function App() {
  const [data, setData] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Next.js",
    "Python",
    "C++",
    "C#",
  ]);
  const [isOpen, setIsopen] = useState(false);
  const [currentItem, setCurrentItem] = useState('')
  const toggleModal = () => {
    setIsopen(!isOpen)
  }
  const deleteItemByName = () => {
    const res = data.filter(elem => elem !== currentItem)
    setData(res)
    setCurrentItem('')
    toggleModal()
  }
  

  return (
    <div className="App">
      {isOpen ?
       <Modal theme='dark' toggleModal={toggleModal} isOpen={isOpen}>
         <h2>Are you sure?</h2>
        <button  onClick={toggleModal}>Close</button>
        <button onClick={deleteItemByName}>Delete</button>

      </Modal> : ''}
      <h1 className="App__title">React Modal Example</h1>
      {data.map((elem) => {
        return (
          <div key={elem} className="App__item">
            <h2>{elem}</h2>
            <button onClick={() => {
              toggleModal()
              setCurrentItem(elem)
              }}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

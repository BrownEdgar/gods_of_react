import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.scss";
import Modal from "../../components/Modal2/Modal";

export default function App() {
  const [data, setData] = useState([]);

 const [isOpen, setIsOpen] = useState(false)
 const [currentItem, setCurrentItem] = useState('')

 const toggleModal = () => {
  setIsOpen(!isOpen)
 }

 const deleteItemByName = () => {
  const res = data.filter(elem => elem !== currentItem)
  setData(res)
  setCurrentItem('')
  toggleModal()
 }

  useEffect(() => {
    axios({
      baseURL: "https://jsonplaceholder.typicode.com",
      url: "posts",
    }).then((res) => setData(res.data));
  }, []);


  

  return (
    <div className="App">
      
      {isOpen ?
       <Modal toggleModal={toggleModal} isOpen={isOpen}>
         <h2>Are you sure?</h2>
        <button onClick={toggleModal}>Close</button>
        <button onClick={deleteItemByName}>Delete</button>

      </Modal> : ''}
      
      {data.map((elem) => {
        return (
          <div className="App__item">
            <h3>{elem.title}</h3>
            <button onClick={() => {
              toggleModal()
              setCurrentItem(elem)
              }}><i class="bx bx-x"></i></button>
            
          </div>
        );
      })}
    </div>
  );
}

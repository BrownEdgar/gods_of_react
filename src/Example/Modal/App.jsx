import React, { useState, useEffect } from "react";
import "./App.scss";
import Modal from "../../components/ModalCookie/Modal";

export default function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);


  useEffect(() => {
    setTimeout(setIsOpen, 2000, true);
  }, []);

  return (
    <div className="App">
      {isOpen ? 
      <Modal isOpen={isOpen} theme='pink'>
        <img src="./images/cookie.png" alt="cookie" />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
          accusamus!
        </p>
        <div className="Modal__buttons">
          <button>Learn more</button>
          <button onClick={toggleModal}>Ok</button>
        </div>
      </Modal> : ""}
      <h1>Rect Modal Example</h1>
    </div>
  );
}

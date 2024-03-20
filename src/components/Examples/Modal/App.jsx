import React, { useState, useEffect } from 'react';
import Modal from '../../Modal/Modal';
import './App.scss'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => setIsOpen(!isOpen)

  useEffect(() => {
    setTimeout(setIsOpen, 1500, true);
  }, [])

  return (
    <div className='App'>
      <Modal isOpen={isOpen} size='lg'>
        <img src="./public/images/cookie.png" alt="cookie" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, facilis!</p>
        <div className="Modal__buttons">
          <button onClick={toggleModal}>Learn More</button>
          <button onClick={toggleModal}>OK</button>
        </div>
      </Modal>
      <h1>React Modal Example</h1>

    </div>
  )
}

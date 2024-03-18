import React, { useState, useEffect } from 'react';
import Modal from '../../components/Modal/Modal';
import './App.scss'

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen(!isOpen)

  useEffect(() => {
    setTimeout(setIsOpen, 1500, true)
  }, [])

  return (
    <div className='App'>
      <Modal isOpen={isOpen} size="lg" theme='pink' position='start'>
        <img src="./images/cookie.png" alt="cookie" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo!</p>
        <div className="Modal__buttons">
          <button onClick={toggleModal}>Learn more</button>
          <button onClick={toggleModal}>ok</button>
        </div>
      </Modal>
      <h1>React Modal example</h1>

    </div>
  )
}

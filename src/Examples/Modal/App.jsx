import React, { useState, useEffect } from 'react';
import Modal from '../../components/Modal/Modal';
import './App.scss'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setTimeout(setIsOpen, 3000, true)
  }, [])

  return (
    <div className='App'>
      <Modal isOpen={isOpen}>
        <img src="" alt="cookie" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, illo!</p>
        <div className="Modal__buttons">
          <button>Learn more</button>
          <button>ok</button>
        </div>
      </Modal>
      <h1>React Modal example</h1>

    </div>
  )
}

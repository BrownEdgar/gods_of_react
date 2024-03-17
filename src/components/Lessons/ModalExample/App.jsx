import React, { useState } from 'react'
import './App.scss';
import Modal from '../../Modal/Modal';

export default function App() {
  const [data, setData] = useState(
    ['html', 'css', 'js', 'React', 'node', 'python']
  )

  const [isOpen, setIsOpen] = useState(false)

  const [currentItem, setCurrentItem] = useState('')

  const toggleModal = () => setIsOpen(!isOpen)

  const deleteItemByName = () => {
    const result = data.filter(elem => elem !== currentItem)
    setData(result)
    setCurrentItem('')
    toggleModal('')
  }

  return (

    <div className='App'>
      {isOpen ? 
        <Modal toggleModal={toggleModal} deleteItemByName={deleteItemByName}>
          <h1>Are you sure ?</h1>
          <button onClick={toggleModal}>Close</button>
          <button onClick={deleteItemByName}>Delete</button>
        </Modal> : null}
      <h1 className='App__title'>React Modal Example</h1>
      {data.map(elem => {
        return (
          <div key={elem} className='App__item'>
            <h2>{elem}</h2>
            <button onClick={() => {
              toggleModal()
              setCurrentItem(elem)
            }}>delete</button>
          </div>
        )
      })}

    </div>
  )
}

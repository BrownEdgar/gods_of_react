import React, { useEffect, useState } from 'react'
import './App.scss';
import Modal from '../../Modal/Modal';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios('https://dummyjson.com/quotes')
      .then(res => setData(res.data.quotes))
  }, [])


  const [isOpen, setIsOpen] = useState(false)

  const [currentItem, setCurrentItem] = useState('')

  const toggleModal = () => setIsOpen(!isOpen)

  const deleteItemByName = () => {
    const result = data.filter(elem => elem.id !== currentItem.id)
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
      <h1 className='App__title'>QUOTES</h1>
      {data.map(elem => {
        return (
          <div key={elem.id} className='App__item'>
            <h2>{elem.id}</h2>
            <p>{elem.quote}</p>
            <button onClick={() => {
              toggleModal()
              setCurrentItem(elem)
            }}>X</button>
          </div>
        )
      })}
    </div>
  )
}

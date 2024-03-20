
import React, { useState, useEffect } from 'react';
import './App.scss'
import axios from 'axios'
import Modal from '../../components/Modal/Modal';

export default function App() {
    const [data, setData] = useState([])
    useEffect(() => {
      axios('https://dummyjson.com/quotes')
      .then(res=> setData(res.data.quotes))
    }, [])

    const [isOpen, setIsOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState('')
    const toogleModal=()=> setIsOpen(!isOpen)
    const deleteItemByName=()=>{
      const result = data.filter(elem => elem.id !== currentItem.id);
      setData(result);
      setCurrentItem('');
      toogleModal();
    }
    
    

  return (
    <div className='App'>
     <Modal toogleModal={toogleModal} isOpen={isOpen}>
      <h1>Are you sure?</h1>
      <button onClick={toogleModal}>close</button>
      <button onClick={deleteItemByName}>delete</button>
     </Modal>
     <h1 className='App__title'>Quotes</h1>
        {Array.from(data).map(elem=>{
      return(
    <div key={elem.id} className='App__item'>
        <p>{elem.quote}</p>
        <button onClick={()=>{
        toogleModal()
        setCurrentItem(elem)
        }}>X</button>
    </div>
      )
     })}

    </div>
  )
}
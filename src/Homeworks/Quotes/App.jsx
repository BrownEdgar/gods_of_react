import './App.scss'
import axios from 'axios'
import instance from './axios'
import React, { useState, useEffect } from 'react';
import Modal from '../../components/Modal/Modal'

export default function App() {
    const [data, setData] = useState([])
    const [IsOpen, setIsOpen] = useState(false)
    const [currItem, setCurrItem] = useState('')


    const toggleModal = () => {setIsOpen(!IsOpen)}
    const deleteByName = () => {
      const res = data.filter(elem => elem !== currItem);
      setData(res)
      setCurrItem('')
      toggleModal()
    }


    useEffect(() => {
        axios("https://dummyjson.com/quotes")
        //instance("quotes")
        .then(res => setData(res.data.quotes))
        .catch(error => {
          console.error("Error fetching data:", error)
      })
    }, [])

    
  return (
    <div className='App'>
      {IsOpen ? <Modal deleteByName = {deleteByName}/> : null}
      <h1>Quotes of the day</h1>
      <div className="App__quotes">
        {
        data.map(elem => {
            return (
              <div className='App__quote' key={elem.id}>
                <p className="quote">«{elem.quote}»</p>
                <p className="author">~{elem.author}~</p>
                <button onClick={() => {toggleModal()}}>Delete</button>
              </div>
            )
          }
        )}
      </div>

    </div>
  )
}

import React, { useReducer } from 'react'
import './App.scss'
import reducer, { initialState } from './reducer'
import Blog from '../../Blog/Blog'
import MainForm from '../../MainForm/MainForm'

export default function App() {
  const [{data, page, perPage}, dispatch] = useReducer(reducer, initialState)
  const currentSlice = data.slice((page - 1) * perPage, page * perPage)

  return (
    <div className='App'>
      <MainForm />
      <div className='App__container'>
        <div className="App__blogs">
          {currentSlice.map(elem => {
            return <Blog key={elem.id} blog={elem} />
          })}
        </div>
      </div>
    </div>
  )
}

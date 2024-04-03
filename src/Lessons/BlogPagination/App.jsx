import React, { useReducer } from 'react'
import './App.scss'
import reducer, { initialState } from './reducer'
import Blog from '../../components/Blog/Blog'
import MainForm from '../../components/MainForm/MainForm'
import Pagination from '../../components/Pagination/Pagination'

export default function App() {
  const [{ data, page, perPage }, dispatch] = useReducer(reducer, initialState)
  const currentSlice = data.slice((page - 1) * perPage, page * perPage)
  const changePage = (n) => {
    dispatch({ type: 'set-page', payload: n })
  }

  return (
    <div className='App'>
      <MainForm />
      <div className='App__container'>
        <div className="App__blogs">
          {currentSlice.map(elem => {
            return <Blog key={elem.id} blog={elem} />
          })}
        </div>
        <Pagination options={{ data, page, perPage }} changePage={changePage}/>
      </div>
    </div>
  )
}

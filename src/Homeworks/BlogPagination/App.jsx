import React, { useReducer } from 'react'
import './App.scss'
import reducer, { initialState } from './reducer'
import MainForm from '../../components/MainForm/MainForm'
import Blog from '../../components/Blog/Blog'

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className='App'>
      <MainForm />
      <div className='App__container'>
        <div className="App__blogs">
            {state.data.map(elem => {
                return <Blog key = {elem.id} blog = {elem}/>
            })}
        </div>
      </div>
    </div>
  )   
}

import React, { useReducer } from 'react';
import reducer, { initialStateValue } from './Reducer';
import { ADD_COUNT, ADD_ITEM, DELETE_BY_INDEX, MINUS_COUNT, RESET_COUNT, SET_TEN, SORT } from './actionTypes';
import './App.scss'



export default function App() {
  const [state, dispatch] = useReducer(reducer, initialStateValue)

  const handleClick = () => {
    const random = Math.floor(Math.random() * 100)
    dispatch({ type: ADD_ITEM, payload: random })
  }

  return (
    <div className='App'>
      <h1>state: {JSON.stringify(state)}</h1>
      <div className="buttons">
        <button onClick={handleClick}>add count</button>
        <button onClick={() => dispatch({ type: SET_TEN })}>set 10</button>
        <button onClick={() => dispatch({type: SORT})}>sort</button>
        <button onClick={() => dispatch({ type: DELETE_BY_INDEX, payload: 5 })}>delete by index</button>
        <button onClick={handleClick}>add count</button>

      </div>
    </div>
  )
}

import React, { useReducer } from 'react'
import reducer, { initialState } from './Reducer';
import { ADD_ITEM, DELETE_BY_INDEX, GET_TOTAL, SET_TEN, SORT } from './ActionTypes';
import './App.scss'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    const random = Math.round(Math.random() * 1e3)
    dispatch({ type: ADD_ITEM, payload: random })
  }

  return (
    <div className='App'>
      <h1> {JSON.stringify(state, null, 10)} </h1>
      <div className="buttons">
        <button onClick={handleClick}>Add Item</button>

      </div>
    </div>
  )
}

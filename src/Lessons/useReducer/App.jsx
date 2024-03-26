import React, { useReducer } from 'react'
import reducer, { initialStateValue } from './reduecr';

import ACTIONS from './actionTypes';
import './App.scss'



export default function App() {
  const [state, dispatch] = useReducer(reducer, initialStateValue);

  const handleClick = () => {
    const random = Math.round(Math.random() * 1e3)
    dispatch({ type: ACTIONS.ADD_ITEM, payload: random })
  }

  return (
    <div className='App'>
      <h1> {JSON.stringify(state)}</h1>
      <div className="buttons">
        <button onClick={handleClick}>add count</button>
        <button
          onClick={() => dispatch({ type: ACTIONS.SET_TEN })}
        >
          SET 10
        </button>

        <button onClick={() => dispatch({ type: ACTIONS.SORT })}>SORT</button>
        <button onClick={() => {
          const random = Math.round(Math.random() * state.length - 1)
          dispatch({ type: ACTIONS.DELETE_BY_INDEX, payload: random })
        }}>delete random index</button>
        <button onClick={() => {
          dispatch({ type: ACTIONS.GET_TOTAL })
        }}>GET_TOTAL</button>
        <button onClick={handleClick}>add count</button>
        <button onClick={handleClick}>add count</button>
        <button onClick={handleClick}>add count</button>
      </div>
    </div>
  )
}

import React, { useReducer } from 'react'
import reducer, { initialStateValue } from './reducer';
import { ADD_RANDOM, ARR_SORT, NUM_TRANSFER } from './actionTypes';
import './App.scss'


export default function App() {
  const [state, dispatch] = useReducer(reducer, initialStateValue);

  const setAction1 = (type) =>{
    dispatch({type: ADD_RANDOM})
  }
  const setAction2 = (type) =>{
    dispatch({type: ARR_SORT})
  }
  const setAction3 = (type) =>{
    dispatch({type: NUM_TRANSFER})
  }
  return (
    <div className='App'>
    <pre> 
          {JSON.stringify(state, null, 2)}
         
    </pre>
    <div className='App-buttons'>
        <button onClick={() => setAction1(ADD_RANDOM)}>add random</button>
        <button onClick={() => setAction2(ARR_SORT)}>sort</button>
        <button onClick={() => setAction3(NUM_TRANSFER)}>num</button>

    </div>
    </div>
  )
}

import React, { useReducer } from 'react'
import reducer, { initialStateValue } from './reducer';
import {ADD_RANDOM, ADD_USER, ADD_USERNAME, FILTER_ARRAY, SHAFFLE_ARRAY} from './actionTypes';
import './App.scss'


export default function App() {
    const [state, dispatch] = useReducer(reducer, initialStateValue);

    const handleSubmit = (e) =>{
      e.preventDefault();
      const username = e.target[0].value
      dispatch({type: ADD_USERNAME, payload: username})
    }
    const setAction = (type) =>{
      dispatch({type: ADD_USER})
    }
    const setAction2 = (type) =>{
      dispatch({type: ADD_RANDOM})
    }
    const setAction3 = (type) =>{
      dispatch({type: SHAFFLE_ARRAY})
    }
    const setAction4 = (type) =>{
      dispatch({type: FILTER_ARRAY})
    }
   
   
  return (
    <div className='App'>
        <pre> 
          {JSON.stringify(state, null, 2)}
        </pre>
        <form onSubmit={handleSubmit}>
          <input type="text" required/>
          <input type="submit" value="save" />
        </form>

        <div className="buttons">
        <button onClick={() => setAction(ADD_USER)}>change user name</button>
        <button onClick={() => setAction2(ADD_RANDOM)}>add random</button>
        <button onClick={() => setAction3(SHAFFLE_ARRAY)}>sorted</button>
        <button onClick={() => setAction4(FILTER_ARRAY)}>filter</button>
        
        </div>
       
    </div>
  )
}

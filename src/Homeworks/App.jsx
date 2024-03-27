import React, { useReducer } from 'react'
import reducer, { initialState } from './reducer'
import { ADD_RANDOM, ADD_USER, ADD_USERNAME, SHAFFLE_ARRAY } from './actionTypes'

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value
    dispatch({ type: ADD_USERNAME, payload: username })
  }
  const setAction = () => {
    dispatch({ type: ADD_USER })
  }
  const setAction2 = () => {
    dispatch({ type: ADD_RANDOM })
  }
  const setAction3 = () => {
    dispatch({ type: SHAFFLE_ARRAY })
  }
  return (
    <div className='App'>
      <pre>
        {
          JSON.stringify(state, null, 2)
        }
      </pre>

      <form onSubmit={handleSubmit}>
        <input type="text" required />
        <input type="submit" value="save" />
      </form>
      <div className="buttons">
        <button onClick={setAction}>change username</button>
        <button onClick={setAction2}>add Random</button>
        <button onClick={setAction3}>add Random</button>
      </div>
    </div>
  )
}

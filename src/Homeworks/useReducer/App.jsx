import React from 'react'
import { useReducer } from 'react'
import reducer from './reducer'

export default function App() {

const [state, dispatch] = useReducer(reducer, [])

  return (
    <div>
      <h2>{JSON.stringify(state)}</h2>
      <button onClick={() => dispatch({type: 'ADD_NUM'})}>add num</button>
      <button onClick={() => dispatch({type: 'REMOVE_NUM'})}>remove num</button>
    </div>
  )
}

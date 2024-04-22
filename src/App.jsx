import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increace, Decreace } from './features/counter/counterSlice'
import "./App.css"

export default function App() {
  const count = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>redux-count : {count}</h1>
      <button onClick={() => dispatch(Increace())}>Increace</button>
      <button onClick={() => dispatch(Decreace())}>Decreace</button>

    </div>
  )
}

import React, { useContext } from 'react'
import { myContext } from './contexts/countContext';


export default function C() {
    const first = useContext(myContext)
    console.log(first);
  return (
    <div>
        <h1>component C</h1>
    </div>
  )
}
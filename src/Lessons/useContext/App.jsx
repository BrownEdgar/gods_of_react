import React, { createContext, useState } from 'react'
import { myContext } from './contexts/countContext'
import A from './A'




export default function App() {
    const [count, setCount] = useState(1)
  return (
    <div>
        <myContext.Provider value={count}>
        <A/>
        </myContext.Provider>
    </div>
  )
}

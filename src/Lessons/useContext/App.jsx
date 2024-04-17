import React, { createContext, useState } from 'react'
import { MyContext } from './contexts/CountContext';
import A from './A'

export default function App() {
  const [count, setCount] = useState(1);
  console.log("App")
  return (
    <div>
      <h1>APP</h1>
      <MyContext.Provider value={{ count, x: 2, plus: () => setCount(count + 1) }}>
        <A />
      </MyContext.Provider>
    </div>
  )
}

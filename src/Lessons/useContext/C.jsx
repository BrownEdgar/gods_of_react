import React, { useContext } from 'react'
import { MyContext } from './contexts/CountContext'
import photo from '../../assets/photo.jpg'


export default function C() {
  console.log("C render")
  const obj = useContext(MyContext)
  return (
    <div>
      <h1>component C</h1>
      <img src={photo} />
      <h2>value : {obj.count}</h2>
      <button onClick={obj.plus}>PLUS</button>
    </div>
  )
}

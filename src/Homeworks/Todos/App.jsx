import React, {useEffect, useState} from 'react'
import './App.css'

export default function App() {
    const [todos, setTodos] = useState([])
    const deleteByIndex=(index)=>{
        setTodos(todos.toSpliced(index,1))
    }

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then (res => res.json())
        .then (data => setTodos(data))
    },[])
  return (
    <div className='App'>
        {todos.map(elem=>{
            return(
                <div className='Todos' key={elem.id}>
                    <h2>{elem.title}</h2>
                    <p>{elem.completed}</p>
                    <button onClick={deleteByIndex}>x</button>
                </div>
            )
        })}
    </div>
  )
}

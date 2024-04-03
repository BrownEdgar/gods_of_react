import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import './App.scss'

export default function App() {
  const [todos, setTodos] = useState([]);
  const [options, setOptions] = useState({
    completed: 0,
    unCompleted: 0
  })
  const [sortOption, setsortOption] = useState(true)

  useEffect(() => {
    if (todos.length > 0) {
      const obj = {
        completed: 0,
        unCompleted: 0
      }
      todos.forEach(elem => {
        elem.completed ? obj.completed += 1 : obj.unCompleted += 1
      })
      setOptions(obj)
    }
  }, [todos])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])

  const toggleCompleted = (id) => {
    const result = todos.map(elem => {
      if (elem.id === id) {
        elem.completed = !elem.completed
      }
      return elem;
    })
    setTodos(result)
  }

  const setCompleted = (status = true) => {
    const result = todos.map(elem => {
      elem.completed = status;
      return elem;
    })
    setTodos(result)
  }
  const handleSort = () => {
    if (Object.values(options).includes(0)) return;
    const arr1 = [];
    const arr2 = [];
    todos.forEach(elem => (elem.completed ? arr1 : arr2).push(elem))
    sortOption ? setTodos([...arr2, ...arr1]) : setTodos([...arr1, ...arr2])
    setsortOption(!sortOption)
  }

  return (
    <div className='App'>
      <h1 className='App__title'>
        Our todos
      </h1>
      <div className='App__header'>
        <div className="App__buttons">
          <button onClick={() => setCompleted(true)}>All done</button>
          <button onClick={() => setCompleted(false)}>All undone</button>
          <button onClick={handleSort}>
            Sort
            <i className='bx bx-sort-alt-2 bx-xs'></i>
          </button>
        </div>
        <p>
          completed: <span> {options.completed}</span>
          unCompleted:<span> {options.unCompleted}</span>
        </p>
      </div>
      <div className='App__container'>
        {todos.map(elem => {
          return (
            <div key={elem.id} onClick={() => toggleCompleted(elem.id)}>
              <h2>{elem.title}</h2>
              <span className={classNames('App__circle', {
                'App__circle-green': elem.completed,
                'App__circle-red': !elem.completed,
              })}></span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(1);
  const [posts, setPosts] = useState([])

  useEffect(() => {

    const getData = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9`);
      const data = await response.json()
      setPosts(data)
    }
    getData()
  }, [])

  return (
    <div className='App'>
      {
        posts.map(elem => {
          return (
            <div className='Post' key={elem.id}>
              <h2>{elem.title}</h2>
              <p>{elem.body}</p>
              <button>X</button>
            </div>
          )
        })
      }
    </div>
  )
}

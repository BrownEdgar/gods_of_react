import axios from 'axios';
import React, { useState, useEffect } from 'react';
import instance from './axios';
import './App.scss'

export default function App() {
  const [data, setData] = useState([])

  const [loading, setLoading] = useState(true)


  useEffect(() => {

    // axios('https://jsonplaceholder.typicode.com/posts', {
    //   params: { _limit: 10, _start: 50 }
    // })

    // axios.get('https://jsonplaceholder.typicode.com/posts')

    // const data = {
    //   userId: 5,
    //   title: 'Lorem ipsum dolor sit.',
    //   body: "lorem14"
    // }
    // axios.post('https://jsonplaceholder.typicode.com/posts', data)

    setLoading(true)

    instance('posts?_limit=9')

      .then(res => setData(res.data))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      < h1 > loading... </ h1 >
    )
  }

  return (
    <div>
      <h1>posts</h1>
      <div className="Posts">
        {
          data.map(elem => {
            return (
              <div key={elem.id} className='Posts__item'>
                <h2>{elem.title}</h2>
                <p>{elem.body}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}


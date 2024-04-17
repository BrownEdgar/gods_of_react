import React, { useState, useEffect } from 'react';
import axios from 'axios'
import instanse from './axios';
import './App.scss'
import PostLoader from '@/Loaders/PostLoader';


export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    // axios('https://jsonplaceholder.typicode.com/posts?_limit=10')
    // axios('https://jsonplaceholder.typicode.com/posts', {
    //   params: {
    //     _limit: 10,
    //     _start: 51
    //   }
    // })
    // axios({
    //   url: 'https://jsonplaceholder.typicode.com/posts'
    // })
    // axios({
    //   baseURL: 'https://jsonplaceholder.typicode.com/',
    //   url: 'todos',
    //   params: { _limit: 8 }
    // })
    // const data = {
    //   userId: 5,
    //   title: 'Lorem ipsum dolor sit.',
    //   body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illo voluptatum perspiciatis voluptates. Qui!'
    // }
    // axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    setLoading(true)
    instanse('posts?_limit=9')
      .then(res => setData(res.data))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <PostLoader className="loader" />
  }

  return (
    <div>
      <h1>Axios</h1>
      <div className="Posts">
        {
          data.map(elem => {
            return (
              <div key={elem.id} className='Posts__item'>
                <h2>{elem.title}</h2>
                <p>{elem.body}</p>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
                  </svg>
                </span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

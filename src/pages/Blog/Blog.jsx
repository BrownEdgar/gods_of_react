import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Blog.scss'

export default function Blog() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: 14,
      }
    })
      .then(res => setPosts(res.data))
  }, [])

  return (
    <div className='Blog'>
      <h1>Blog Page</h1>
      <h2>Posts</h2>
      <div className="Posts">
        {
          posts.map(elem => {
            return <Link key={elem.id}>
              {elem.title}
            </Link>
          })
        }
      </div>
    </div>
  )
}
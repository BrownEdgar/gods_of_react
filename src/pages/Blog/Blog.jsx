import React, { useState, useEffect } from 'react';

import './Blog.scss'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: 14
      }
    }).then(res => setPosts(res.data))
  }, [])

  return (
    <div className='Blog'>
      <h1>posts</h1>
      <div className="Posts">
        {
          posts.map(elem => {
            return <Link key={elem.id} to={`${elem.id}`}>
              {elem.title}
            </Link>
          })
        }
      </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import ROUTES from '../../routes'
import axios from 'axios';

import './Post.scss'

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({})
  const [hasError, setHasError] = useState(false)


  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => setPost(res.data))
      .catch(err => setHasError(true))
  }, [])
  if (hasError) {
    return (
      <>
        <h1 className='error'>404 | POST not found </h1>
        <Link to={ROUTES.BLOG} className='Link'>All posts</Link>
      </>
    )
  }

  return (
    <div className='Post'>
      <h1>Welcome to the POST N {id}</h1>
      <div className="Post_content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <Link to={ROUTES.BLOG} className='Link'>All posts</Link>
    </div>
  )
}

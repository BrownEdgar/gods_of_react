import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Post.scss'
import ROUTES from '../../routes'

export default function Post() {
  const {id} = useParams()
  const [post, setPost] = useState({})
  useEffect(() => {
    Axios('https://jsonplaceholder.typicode.com/posts/${id}')
      .then(res => setPost(res.data))
  }, [])
  
  return (
    <div className='Post'>
      <h1>Welcome to the post N{id}</h1>
      <div className="Post__content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <Link to={ROUTES.BLOG}>ALL POSTS</Link>
    </div>
  )
}

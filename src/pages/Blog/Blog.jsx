
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './Blog.scss'

export default function Blog() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/posts?_limit=14")
        .then(res => setPosts(res.data))
    }, [])
    

  return (
    <div className='Blog'>
        <h1>Posts</h1>
        <div className="Posts">
            {
                posts.map(elem =>{
                    return <Link key={elem.id}>
                        {elem.title}
                    </Link>
                })
            }

        </div>
    </div>
  )
}

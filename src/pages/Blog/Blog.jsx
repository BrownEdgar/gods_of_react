
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Blog.scss'

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [filteredArray, setFilteredArray] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [timmerId, setTimmerId] = useState(null)

  useEffect(() => {
    const filtering = (posts, value) => {
      if (value.trim() === '') setFilteredArray(posts);
      setFilteredArray(posts.filter(elem => elem.title.includes(value.toLowerCase())))
    }
    filtering(posts, searchValue)
  }, [searchValue])


  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data);
        setFilteredArray(res.data)
      })
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (e) => {
    if (timmerId !== null) {
      clearTimeout(timmerId)
    }
    const timer = setTimeout(() => {

      setSearchValue(e.target.value)
    }, 500)
    setTimmerId(timer)
  }

  return (
    <div className='Blog'>
      <h1>posts</h1>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder='search' onChange={handleChange} />
      </form>
      <div className="Posts">
        {
          filteredArray.map(elem => {
            return <Link key={elem.id} to={`${elem.id}`}>
              {elem.title}
            </Link>
          })
        }
      </div>
    </div>
  )
}

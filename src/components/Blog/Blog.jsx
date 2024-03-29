import React from 'react'
import  './Blog.scss'

export default function Blog() {
  return (
    <div className='Blog'>
      <img src={blog.poster}  />
      <div className='Blog__content'>
        <h2>{blog.title}</h2>
        <p>{blog.desc}</p>
        <div className='Blog__footer'>
          <img src={blog.avatar} className='Blog__avatar'/>
          <p>{blog.date}</p>

        </div>
      </div>
    </div>
  )
}

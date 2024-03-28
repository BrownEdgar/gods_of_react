import React from 'react'
import './Blog.scss'

export default function Blog({ blog }) {
  return (
    <div className='Blog'>
      <img src={blog.poster} alt="" />
      <div className="Blog__content">
        <h2>{blog.title}</h2>
        <p>{blog.desc}</p>
        <div className='Blog__footer'>
          <img src={blog.avatar} alt="" className='Blog__avatar'/>
          <p>{blog.date}</p>
          <a href="!#">Read Post</a>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import './Blog.scss'

export default function Blog({blog}) {
  return (
    <div className='Blog'>
      <img src={blog.poster} />
      <div className="Blog__content">
        <h2>{blog.title}</h2>
        <p>{blog.desc}</p>
        <div className="Blog__footer">
          <img src={blog.avatar} alt="avatar"  className='Blog__avatar'/>
          <p>{blog.date}</p>
          <a href="!#">Read post</a>
        
        </div>
      </div>
    </div>
  )
}

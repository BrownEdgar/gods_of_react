import "./Blog.scss"
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import moment from "moment";

export default function Blog() {
  const [posts, setposts] = useState([])
  useEffect(() => {
    axios('http://localhost:3000/blogs')
      .then(res => setposts(res.data))
  }, [])
  return (
    <div className='Blog'>
      <div className="container">
        <div className="posts">
          {
            posts.map(elem => {
              return (
                <article className="post" key={elem.id}>
                  <Link to={`${elem.id}`} state={elem}>
                    <img src={elem.img} alt={elem.title} />
                  </Link>
                  <h1>{elem.title}</h1>
                  <p>{moment([elem.date]).fromNow()}</p>
                </article>
              );
            })}
        </div>

      </div>
    </div>
  )
}

import "./Blog.scss"
import React, { useReducer, useEffect } from 'react';
import Posts from '../../blog.json'
import moment from "moment";
import ROUTES from "../../routes";
import { Link } from "react-router-dom";

export default function Blog() {

  return (
    <div className='Blog'>
      <div className="container">
      <div className="posts">
        {
          Posts.map(elem => {
            return (
              <article className="post" key={elem.id}> 
                <Link to={`${elem.id}`}>
                  <img src={elem.img} alt={elem.title} /> 
                </Link>
                <h1>{elem.title}</h1>
                <p>{moment([`${elem.date}`]).fromNow()}</p>
              </article>
            );
          })}
      </div>

      </div>
    </div>
  )
}

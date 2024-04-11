import "./Post"
import Posts from '../../blog.json'
import { useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';


export default function Post() {
    const [post, setPost] = useState({})
    const params = useParams()
    console.log(params.id)
    // setPost(Posts.find(elem => elem.id === params.id))
    // console.log(post)
  return (
    <div className='Post'>
      {
        Posts.map(elem => {
            if (elem.id == params.id) {
                return(
                    <div key={elem.id} className="PostContent">
                        <img src={elem.img}/>
                        <h1>{elem.title}</h1>
                        <p>{elem.description}</p>
                    </div>
                )
            }
        })
      }
    </div>
  )
}

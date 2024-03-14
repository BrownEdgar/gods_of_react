
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import instanse from './axios';
import './App.scss'

export default function App() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setLoading(true)
        instanse('posts?_limit=9')
        .then(res=> setData(res.data))
        .finally(() => setLoading(false))
    },[])
    if(loading){
        return <h1>Loading...</h1>
    }
  return (
    <div>
        <h1>Axios</h1>
        <div className="Posts">
            {
                data.map(elem=>{
                    return(
                        <div key={elem.id} className='Posts__item'>
                            <h2>{elem.title}</h2>
                            <p>{elem.body}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Slider from "react-slick";
import './News.scss'


export default function News() {
    const [state, setState] = useState([])
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    useEffect(() => {
     axios('http://localhost:3000/blogs')
     .then(res => setState(res.data))
    }, [])
    
  return (
    <div className='News'>
      <Slider {...settings}>
      {
        state.map(elem =>{
          return(
            <article key ={elem.id}>
              <Link to={`${elem.id}`} state={elem}>
              <img src={elem.poster}/>
              <h2>{elem.title}</h2>
              <p>{moment(elem.date).format('Do MMM')}</p>
        
              </Link>
            </article>
          )
        })
      }
      </Slider> 
    </div>
  )
}

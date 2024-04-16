import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './Products.scss'

export default function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios('https://fakestoreapi.com/products')
        .then(res => setProducts(res.data))
       
        
      
    }, [])
    
  return (
    <div >
        <h1>Products</h1>
        <div className='Products'>
        {
                products.map(elem =>{
                    return <Link key={elem.id} to={`${elem.id}`}>
                        
                        {elem.title}
                        <img src={elem.image} alt="" />
                      
                   </Link>
               })
           }

        </div>
    </div>
  )
}

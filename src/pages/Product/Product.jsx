import { Link, useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.scss'
import ROUTES from '../../routes';


export default function Product() {
    const {id} = useParams();
    const [product, setProduct] = useState({})
    const [error, setError] = useState(false)

    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`)
        .then(res => setProduct(res.data))
        .catch(error => setError(true))  
    }, [])
    if(error){
        return(
            <>
            <h1>404 | Product not found</h1>
            <Link to={ROUTES.PRODUCTS} className='Link'>all products</Link>
            </>
        )
    }
    

  return (
    <div className='Product'>
        <h1>Product N {id}</h1>
        <div className="Product__container">
            <h3>{product.title}</h3>
            <span>Price: {product.price}</span>
            <p>{product.description}</p>
            <img src={product.image} alt="" />   
        </div>
        <Link to={ROUTES.PRODUCTS} className='Link'>all products</Link>
    </div>
  )
}

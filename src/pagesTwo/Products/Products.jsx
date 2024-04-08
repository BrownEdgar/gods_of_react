import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Products.scss";
import { categories } from '../../utils/constants';

export default function Products() {
  const [product, setProduct] = useState([]);
  const [filteredArray, setFilteredArray] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('all')



  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) => {
      setProduct(res.data)
      setFilteredArray(res.data)
    });
  }, []);

  useEffect(() => {
    if (currentCategory === 'all') {
      setFilteredArray(product)
    } else {
      setFilteredArray(product.filter(elem => elem.category === currentCategory))
    }
  }, [currentCategory])



  const handleChange = (e) => {
    setCurrentCategory(e.target.value)
  }

  return (
    <div className="Products">
      <h2>Products</h2>
      <select name="categories" id="categories" defaultValue='all' onChange={handleChange}>
        <option value="all">All</option>
        {categories.map(elem => {
          return (
            <option value={elem} key={elem}>
              {elem}
            </option>
          )
        })}
      </select>
      <div className="Products__content">
        {filteredArray.map((elem) => {
          return (
            <Link key={elem.id} to={`${elem.id}`}>
              {elem.title}
              {<img src={elem.image} />}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

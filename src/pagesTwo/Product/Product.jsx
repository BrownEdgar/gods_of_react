import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import "./Product.scss";
import ROUTES from "../../../routes";

export default function Product() {
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((res) =>
      setProduct(res.data)
    );
  }, []);

  const { id } = useParams();

  return (
    <div className="Product">
      <h2>Product N{id}</h2>
      <div className="Product__content">
        <p>Id: {product.id}</p>
        <p>Title: {product.title}</p>
        <p>Price: {product.price}</p>
        <p>Description: {product.description}</p>
        <p>Category: {product.category}</p>
        <img src={product.image} />
      </div>
      <Link to={ROUTES.PRODUCTS}>All products</Link>
    </div>
  );
}

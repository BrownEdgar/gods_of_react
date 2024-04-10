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
      <div className="Product__img">
        <img src={product.image} />
        </div>
      <div className="Product__content">
        <p>{product.title}</p>
        <p>{product.price}$</p>
        <p>{product.description}</p>
        <p>Category: {product.category}</p>
        <p>Rate: {product?.rating?.rate}</p>
        <Link to={ROUTES.PRODUCTS} className="allProducts">All products</Link>
      </div>
     
    </div>
  );
}

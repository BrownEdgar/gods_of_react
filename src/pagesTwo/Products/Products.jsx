import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Products.scss";

export default function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((res) =>
      setProduct(res.data)
    );
  }, []);

  return (
    <div className="Products">
      <h2>Products</h2>
      <div className="Products__content">
      {product.map((elem) => {
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

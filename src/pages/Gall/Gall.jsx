import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ROUTES from "../../routes";
import "./Gall.scss";

export default function Gall() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => setHasError(true));
  }, []);

  if (hasError) {
    return (
      <>
        <div>
          <h1>404 Page is not found</h1>
          <Link to={ROUTES.GALLERY} className="link">
            ALL PRODUCTS
          </Link>
        </div>
      </>
    );
  }
  return (
    <div className="Gall">
      <h1>Welcome to the product N {id}</h1>
      <h2>{product.title}</h2>
      <img src={product.image} alt="" />
      <div className="Gall__content">
        <h3>Price : {product.price}</h3>
        <p>{product.description}</p>
      </div>
      <Link to={ROUTES.GALLERY}>ALL PRODUCTS</Link>
    </div>
  );
}

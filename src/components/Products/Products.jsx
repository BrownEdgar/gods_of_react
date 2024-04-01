import React from "react";
import "./Products.scss";

export default function Products({ product }) {
  return (
    <div className="Products">
      <img src={product.image} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h4>
        <i className="bx bx-purchase-tag-alt"></i>

        ${product.price}
      </h4>
    </div>
  );
}

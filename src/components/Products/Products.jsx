import React from "react";
import "./Products.scss";

export default function Products({
  product,
  deleteProduct,
  editableProductId,
  dispatch
}) 

{
  const handleEdit = (e) => {
    e.preventDefault();
    const {name, description, price } = e.target
    const product = {
      name: name.value,
      description: description.value,
      price: price.value,
     
    }
    dispatch({type: "set-edit-product", payload: null});
    dispatch({type: "update-product", payload: product})
  }
  
  
  return (
    <div className="Products">
      <button className="Products__edit" onClick={() => dispatch({type: 'set-edit-product', payload: product.id})}>
        <i className="bx bxs-edit"></i>
      </button>
      <button className="Products__delete" onClick={() => deleteProduct(product.id)}>
        <i className="bx bx-minus-circle"></i>
      </button>
      {editableProductId === product.id ? (
      
          <form onSubmit={handleEdit}>
            <input type="text" name="name" placeholder="Title"/>
            <textarea name="description" id="description" placeholder="Description..."></textarea>
            <input type="text" name='price' placeholder="Price" />

            <input type="submit" value='Cancel' onClick={() => dispatch({type: 'set-edit-product', payload: null})} />
            <input type="submit" value='Save'/>
            
          </form>
        ) : (
        <>
          <img src={product.image} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h4>
            <i className="bx bx-purchase-tag-alt"></i>${product.price}
          </h4>
        </>
      )}
    </div>
  );
}

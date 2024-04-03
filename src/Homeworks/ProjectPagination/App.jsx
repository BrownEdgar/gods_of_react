import React, { useReducer } from "react";
import "./App.scss";
import Products from "../../components/Products/Products";
import reducer, { initialState } from "./reducer";
import ReactPaginate from "react-paginate";
import ProjectMainForm from "../../components/ProjectMainForm/ProjectMainForm";

export default function App() {
  const [{ data, page, perPage, editableProductId }, dispatch] = useReducer(reducer, initialState);
  const currentSlice = data.slice((page - 1) * perPage, page * perPage);

  const changePage = ({ selected }) => {
    dispatch({ type: "set-page", payload: selected + 1 });
  };

  const addProduct = (product) => {
    dispatch({ type: "add-product", payload: product });
  };

  const deleteProduct = (id) => {
    dispatch({ type: "delete-product", payload: id });
  };
  
  const total = Math.ceil(data.length / perPage);

  return (
    <div className="App">
      <div className="App__container">
        <ProjectMainForm addProduct={addProduct} />
        <div className="App__content">
          {currentSlice.map((elem) => {
            return (
              <Products
                key={elem.id}
                product={elem}
                deleteProduct={deleteProduct}
                editableProductId={editableProductId}
                dispatch={dispatch}
              />
            );
          })}
        </div>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<i className="bx bx-chevron-right"></i>}
        onPageChange={changePage}
        pageRangeDisplayed={2}
        pageCount={total}
        previousLabel={<i className="bx bx-chevron-left"></i>}
        renderOnZeroPageCount={null}
        className="pagination"
      />
    </div>
  );
}

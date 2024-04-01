import React, { useReducer } from "react";
import "./App.scss";
import Products from "../../components/Products/Products";
import reducer, { initialState } from "./reducer";
import ReactPaginate from 'react-paginate';

export default function App() {
  const [{ data, page, perPage }, dispatch] = useReducer(reducer, initialState);
  const currentSlice = data.slice((page - 1) * perPage, page * perPage);
  const changePage = ({selected}) => {
    dispatch({ type: "set-page", payload: selected + 1 });
  };
  const total = Math.ceil(data.length / perPage);
  return (
    <div className="App">
      <div className="App__content">
        {currentSlice.map((elem) => {
          return <Products key={elem.id} product={elem} />;
        })}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<i className='bx bx-chevron-right'></i>}
        onPageChange={changePage}
        pageRangeDisplayed={2}
        pageCount={total}
        previousLabel={<i className='bx bx-chevron-left'></i>}
        renderOnZeroPageCount={null}
        className="pagination"
      />
    </div>
  );
}

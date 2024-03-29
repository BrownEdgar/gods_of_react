import React, { useReducer } from 'react'
import './App.scss'
import reducer, { initialState } from './reducer'
import MainForm from '../../components/MainForm/MainForm'
import Blog from '../../components/Blog/Blog'
import ReactPaginate from 'react-paginate';

export default function App() {
  const [{ data, page, perPage }, dispatch] = useReducer(reducer, initialState);
  const currentSlice = data.slice((page - 1) * perPage, page * perPage)

  const changePage = ({ selected }) => {
    dispatch({ type: 'set-page', payload: selected + 1 })
  }
  const addBlog = (blog) => {
    dispatch({ type: 'add-blog', payload: blog })
  }
  const total = Math.ceil(data.length / perPage)

  return (
    <div className='App'>
      <MainForm addBlog={addBlog} />
      <div className='App__container'>
        <div className="App__blogs">
          {currentSlice.map(elem => {
            return <Blog key={elem.id} blog={elem} />
          })}
        </div>
        {/* <Pagination options={{ data, page, perPage }} changePage={changePage} /> */}
        <ReactPaginate
          breakLabel="..."
          nextLabel={<i className="bi bi-caret-right-fill"></i>}
          onPageChange={changePage}
          pageRangeDisplayed={3}
          pageCount={total}
          previousLabel={<i className="bi bi-caret-left-fill"></i>}
          renderOnZeroPageCount={null}
          className='pagination'
        />
      </div>
    </div>
  )
}

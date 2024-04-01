import React, { useEffect, useReducer } from 'react'
import './App.scss'
import reducer, { initialState } from './reducer'
import MainForm from '../../components/MainForm/MainForm'
import Blog from '../../components/Blog/Blog'
import ReactPaginate from 'react-paginate';
import axios from 'axios'

const BASE_URL = import.meta.env.VITE_DB_URL
export default function App() {
  const [{ data, page, perPage, editablePostId }, dispatch] = useReducer(reducer, initialState);
  const currentSlice = data.slice((page - 1) * perPage, page * perPage)

  const changePage = ({ selected }) => {
    dispatch({ type: 'set-page', payload: selected + 1 })
  }

  const addBlog = (blog) => {
    axios.post(BASE_URL, blog)
      .then(getPosts)
  }
  const total = Math.ceil(data.length / perPage)


  const getPosts = () => {
    axios(import.meta.env.VITE_DB_URL)
      .then(res => dispatch({ type: "get-blogs", payload: res.data }))
  }

  const handeleDelete = (id) => {

    axios.delete(`${BASE_URL}/${id}`)
      .then(getPosts)

  }
  useEffect(() => {
    getPosts()
  }, [])


  return (
    <div className='App'>
      <MainForm addBlog={addBlog} />
      <div className='App__container'>
        <div className="App__blogs">
          {currentSlice.map(elem => {
            return <Blog
              key={elem.id}
              blog={elem}
              editablePostId={editablePostId}
              handeleDelete={handeleDelete}
              dispatch={dispatch}
            />
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

import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addCounter, decrement } from './features/counter/counterSlice'
import axios from 'axios'
import { savePosts } from './features/posts/postsSlice'
import { saveTodods } from './features/todos/tododsSlice'
import { changeFilter, getProducts } from './features/products/productsSlice'
import Products from './componenets/Products/Products'

const categories = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
]

export default function App() {
    const count = useSelector(state => state.counter)
    const posts = useSelector(state => state.posts)
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    useEffect(() => {
     axios('https://jsonplaceholder.typicode.com/posts?_limit=7')
     .then(res => dispatch(savePosts(res.data)))
    }, [])
    useEffect(() => {
      axios('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => dispatch(saveTodods(res.data)))
    }, [])

    useEffect(() => {
      dispatch(getProducts())
    }, [])

    const handleChange = (e)=>{
      dispatch(changeFilter(e.target.value))
  
    }
    
    
    
  return (
    <div>
        <h1>count: {count}</h1>
        <button onClick={()=> dispatch(addCounter())}>add</button>
        <button onClick={()=> dispatch(decrement())}>minus</button>
        <p>posts: {JSON.stringify(posts)}</p>
        <br />
        <p>todos: {JSON.stringify(todos)}</p>
        <select name="category" id="category" onChange={handleChange}>
          {categories.map(elem=>{
            return <option value={elem} key={elem}>
              {elem}
            </option>
          })}
        </select>
        <Products/>
    </div>
  )
}

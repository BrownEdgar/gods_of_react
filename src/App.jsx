import React, { useEffect } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addCounter, decrement } from './features/counter/counterSlice';
import axios from 'axios';
import { savePosts } from './features/posts/postsSlice';

export default function App() {
  const count = useSelector(state => state.counter);
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts?_limit=8')
      .then(res => dispatch(savePosts(res.data)))
  }, [])


  return (
    <div>
      <h1>redux count : {count}</h1>
      <h1>posts:{JSON.stringify(posts)}</h1>
      <button onClick={() => dispatch(addCounter())}>add count</button>
      <button onClick={() => dispatch(decrement())}>Minus</button>
    </div>
  )
}

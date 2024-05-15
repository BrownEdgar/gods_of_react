
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addCounter, setNumber } from './features/counter/counterSlice';
import { getPosts } from '@f/posts/postsSlice';
import { useEffect } from 'react';
import { changeFilter, getProducts } from '@f/products/productsSlice';
import Products from '@/Products/Products';

const categories = [
  'all',
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
]

export default function App() {
  const count = useSelector(state => state.counter);
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getPosts(count))

  // }, [count])


  useEffect(() => {
    dispatch(getProducts())
  }, [])
  const handleChange = (e) => {

    dispatch(changeFilter(e.target.value))
  }
  const handleClick = () => {
    dispatch(addCounter())
  }
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={handleClick}>Add count</button>
      <select name="category" id="category" onChange={handleChange}>
        {categories.map(elem => {
          return <option value={elem} key={elem}>{elem}</option>
        })}
      </select>
      <Products />
    </div>
  )
}

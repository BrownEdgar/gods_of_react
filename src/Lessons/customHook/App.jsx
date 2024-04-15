import React from 'react'
import './App.scss'

import useArray from './useArray';
import Title from '../../UI/Title/Title';

export default function App() {
  // const [state, { plus, minus, addRandom }] = useCustomHook(0);
  // const [data, loading, error] = useFetchData({ url: 'https://jsonplaceholder.typicode.com/comments', limit: 7, start: 5 });
  const [data, { sort, getMax, getMin }] = useArray({ count: 18, min: 0, max: 500 })

  // if (loading) {
  //   return <h1>Loading...</h1>
  // }

  return (
    <div>
      {/* <h1>State: {JSON.stringify(data, null, 1)}</h1>
      <button onClick={plus}>PLUS</button>
      <button onClick={minus}>MINUS</button>
      <button onClick={addRandom}>addRandom</button> */}
      <Title title='custom Hook example' color='purple' size='xl' as='h2'></Title>
      <h2>Data: {JSON.stringify(data, null, 1)}</h2>
      <button onClick={sort}>SORT</button>
    </div>
  )
}

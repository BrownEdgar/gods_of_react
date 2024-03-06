import { useState } from 'react'
import About from './components/About/About';
import List from './components/List/List';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div className='App'>
      <h1>Ract + VITE</h1>
      <button onClick={handleClick}>count : {count}</button>
      <About title='first props title from App' />
    </div>
  )
}

export default App;



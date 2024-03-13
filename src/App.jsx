import { useState } from 'react'
import data from './data.json'
import './App.css'

function App() {
  const [users, setusers] = useState(data)

  const handleChange = () => {
    setusers((prevUsers) => {
      return prevUsers.map(elem => {
        if (elem.name == "Jhon") {
          elem.name = 'Karen'
        }
        return elem;
      })
    })
  }

  return (
    <div className='App'>
      <h1>Ract + VITE</h1>
      {
        users.map(elem => {
          return <h2 key={elem.id}>{elem.name}</h2>
        })
      }
      <button onClick={handleChange}>change Jhon name</button>
    </div>
  )
}

export default App;



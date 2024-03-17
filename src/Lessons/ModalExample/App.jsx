import React, { useState } from 'react';
import './App.scss'
import Modal from '../../components/Modal/Modal';


export default function App() {
    const [data, setData] = useState(
        ['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python']
    )
  return (
    <div className="App">
      <Modal/>
      <h1 className="App__title">React Modal example</h1>
        {data.map(elem=>{
          return(
            <div key={elem} className="App__item">
              <h2>{elem}</h2>
              <button>Delete</button>
            </div>
          )
        })}
    </div>
  )
}

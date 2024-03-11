
import React, { useState, useEffect } from 'react';
import './App.scss'

export default function App() {
    const [movies, setMovies] = useState([
        {
          id: 1,
          title: "Terminator",
          genre: "Action",
          stock: 6,
          rate: 2.5,
        },
        {
          id: 2,
          title: "Die Hard",
          genre: "Action",
          stock: 5,
          rate: 2.5,
        },
        {
          id: 3,
          title: "Get Out",
          genre: "Thriller",
          stock: 8,
          rate: 3.5,
        },
        {
          id: 4,
          title: "Trip to Italy",
          genre: "Comedy",
          stock: 7,
          rate: 3.5,
        },
        {
          id: 5,
          title: "Airplane",
          genre: "Comedy",
          stock: 7,
          rate: 3.5,
        },
      ]);
      const deleteById=(id)=>{
        const x = movies.filter(elem =>elem.id !== id)
        setMovies(x)
      }

  return (
    <div className='App'>
        <p className='App__title'>Showing 9 movies in the batabase</p>
        <div className='App__container'>
            {movies.map(elem=>{
                return(
                    <div key={elem.id}>
                        <span>{elem.title}</span>
                        <span>{elem.genre}</span>
                        <span>{elem.stock}</span>
                        <span>{elem.rate}</span>
                        <button onClick={()=>deleteById(elem.id)}>Delete</button>
                    </div>
                )
            })}
            
        </div>
    </div>
  )
}

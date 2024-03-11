import React, { useState, useEffect } from 'react';
import './App.scss'
import data from './data.json';


export default function App() {
  const [movies, setMovies] = useState(data)


  const deleteItem = (index) => {
    console.log('index', index)
    setMovies(movies.toSpliced(index, 1));
  };


  return (
    <div className='App'>
      <h1>Movie List</h1>
      <div className='App__container'>
        <div className="App__hearder App__container__row">
          <p>Title</p>
          <p>Genre</p>
          <p>Stock</p>
          <p>Rate</p>
          <p></p>
        </div>
        {movies.map((movie, index) => (
          <div className='App__container__row' key={movie.id}>
            <p>{movie.title}</p>
            <p>{movie.genre}</p>
            <p>{movie.stock}</p>
            <p>{movie.rate}</p>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

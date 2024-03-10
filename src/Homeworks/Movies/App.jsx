import React, { useState, useEffect } from 'react';
import './App.scss'
import data from './data.json';


export default function App() {
    const[movies, setMovies] = useState([])

    useEffect(() => {
        setMovies(data);
      }, []);

    const deleteItem = (index) => {
        //setMovies(movies.toSpliced(index, 1))
        const updatedMovies = [...movies];
        updatedMovies.splice(index, 1);
        setMovies(updatedMovies);
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
            {data.map((movie, index) => (
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

import React from 'react'
import './App.scss'

export default function App() {
  return (
    <div className='App'>
      <div className="App__content">
        <div className="App__header">
          <span className='App__news'>News</span>
          <h1>
            Discover weekly content about <br /> organic food, & more
          </h1>
          <button className='App__btn App__btn-outline'>
            more news
            <i className='bx bxs-right-arrow-circle'></i>
          </button>
        </div>
        <div className="App__block">
          <p className="App__date">
            25 <br /> Nov
          </p>
          <div>
            <p className='App__userIcon'>
              <i class='bx bx-user'></i>
              <span>By Rachi Card</span>
            </p>
            <h2>The Benefits of Vitamin D & How to Get it</h2>
            <p>Simply dummy text of the printing and typesetting Lorem, ipsum dolor.</p>
            <button className="App__btn App__btn-peru">
              Read More
              <i className='bx bxs-right-arrow-circle'></i>

            </button>
          </div>
        </div>
        <div className="App__block">
          <p className="App__date">
            25 <br /> Nov
          </p>
          <div>
            <p className='App__userIcon'>
              <i class='bx bx-user'></i>
              <span>By Rachi Card</span>
            </p>
            <h2>The Benefits of Vitamin D & How to Get it</h2>
            <p>Simply dummy text of the printing and typesetting Lorem, ipsum dolor.</p>
            <button className="App__btn App__btn-peru">
              Read More
              <i className='bx bxs-right-arrow-circle'></i>

            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

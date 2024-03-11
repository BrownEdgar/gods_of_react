import React from 'react'
import "./App.scss"

export default function App() {
  return (
    <div className='App'>
      <div className="App__content">
        <div className="App__header">
          <span className='App__news'>News</span>
          <h1>Discover weekly content about <br /> organic food & more</h1>
          <button className='App__btn App__btn-outline'>
            More News
            <i class='bx bxs-right-arrow-circle' ></i>
          </button>
        </div>
        <div className="App__block">
          <p className='App__date'>
            25 <br /> Nov
          </p>
          <div>
            <p className='App__userIcon'>
              <i class='bx bx-user' ></i>
              By Richi Card
            </p>
            <h2>The benefits of Vitamin D & how to get it</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, ducimus.</p>
            <button className='App__btn App__btn-peru'>
              Read More
              <i class='bx bxs-right-arrow-circle' ></i>
            </button>
          </div>
        </div>
        <div className="App__block">

        </div>
      </div>
    </div>
  )
}

import React from 'react'
import './App.scss'

export default function App() {
  return (
    <div className="App">
        <div className="App__content">
            <div className="App__header">
                <span className="App__news">News</span>
                <h1>
                    Lorem ipsum, dolor sit amet <br /> consectetur adipisicing.
                </h1>
                <button className="App__btn App__btn-outline">
                    more news
                    <i className='bx bxs-right-arrow-circle'></i>
                </button>

            </div>
            <div className="App__block">
                <p className="App__date">
                    25 <br /> Nov
                </p>
                <div>
                    <p className="App__userIcon">
                    <i class='bx bx-user'></i>
                    <span>By Rachi Card</span>
                    </p>
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis, numquam. Lorem ipsum dolor sit.</p>
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
                    <p className="App__userIcon">
                    <i class='bx bx-user'></i>
                    <span>By Rachi Card</span>
                    </p>
                    <h2>Lorem ipsum dolor sit amet.</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis, numquam. Lorem ipsum dolor sit.</p>
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

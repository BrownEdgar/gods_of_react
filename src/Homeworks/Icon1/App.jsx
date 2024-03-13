import React from 'react'
import './App.scss'

export default function App() {
  return (
    <div className="App">
        <div className="App__container">
            <div className="App__header">
                <h1>Create Account</h1>
                <p>Choose one of the following sing up methods</p>

            </div>
            <div className="App__block">
                <div>
                <button className="App__btn">
                <i class='bx bxl-facebook'></i>
                    With Facebook
                </button>
                </div>

                <div>
                <button className="App__btn App__btn-red">
                <i className='bx bxl-google-plus'></i>
                    With Google
                </button>
                </div>
                <hr />
             
            </div>
        </div>
    </div>
  )
}

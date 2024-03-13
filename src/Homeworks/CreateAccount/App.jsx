import React from 'react'
import './App.scss'
import 'boxicons'




export default function App() {
  return (
    <div className='App'>
      <h1>Create Account</h1>
      <p>Choose one of the following sign up methods</p>
      <div className="App__btns">
        <div className="btn fb">
            <i className='bx bxl-facebook' ></i>
            <p>With Facebook</p>
        </div>
        <div className="btn google">
            <i className='bx bxl-google-plus' ></i>
            <p>With Google</p>
        </div>
      </div>
    </div>
  )
}

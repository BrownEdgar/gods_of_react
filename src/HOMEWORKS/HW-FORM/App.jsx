import React, { useState, useEffect } from 'react';
import { nanoid } from "nanoid";
import './App.scss'

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'Sebastian',
      password: 1234,
      email: 'sebastian@gmail.com'
    }
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    const { username, password, email } = e.target;
    const doesEmailExist = users.some(user => user.email === email.value.toLowerCase())
    if (!doesEmailExist) {
      const user = {
        id: nanoid(8),
        username: username.value,
        password: password.value,
        email: email.value.toLowerCase(),
      }
      setUsers([...users, user]);
      e.target.reset();
    }
  };

  return (
    <div className="container">
      <div className='App'>
        <h1>LOGIN FORM</h1>
        <form className='App__form' onSubmit={handleSubmit}>
          <input type="text" name='username' required placeholder='username' />
          <input type="password" name='password' required placeholder='password' />
          <input type="mail" name='email' required placeholder='your email' />
          <div className="checkbox">
            <input type="checkbox" id='checkbox' />
            <label htmlFor="checkbox">Remember Me</label>
          </div>
          <input type="submit" value='Login Here' />
          <a href="">Don't Have an Account ?</a>
          <a href="">Sign Up !</a>
        </form>

        <hr />

        <ul className='App__list'>
          {users.map((elem, index) => {
            return <li key={elem.id}>
              <span>{index + 1}</span>
              <p className='username'>
                <i className="bi bi-person-fill"></i>
                {elem.username}
              </p>
              <div className='devider'></div>
              <p className='email'>
                <i className="bi bi-envelope"></i>
                {elem.email}
              </p>
            </li>
          })}
        </ul>
      </div>
    </div>
  )
}

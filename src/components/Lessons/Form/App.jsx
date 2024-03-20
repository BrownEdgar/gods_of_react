import React, { useState, useEffect } from 'react';
import { nanoid } from "nanoid";
import './App.scss'
import Modal from '../../Modal/Modal';

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'Sebastian',
      email: 'sebastian@gmail.com'
    }
  ])

  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => setIsOpen(!isOpen)

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target.username.value);
    // console.log(e.target[0].value);
    // console.log(e.target.user.value);
    // console.log(e.target.elements[0].value);

    // const user = e.target.username.value

    // if (!users.includes(user)) {
    //   setUsers([...users, user])
    //   e.target.reset();
    // } else {
    //   alert('Username already exists')
    // }

    const { email, username, language } = e.target;
    const doesEmailExist = users.some(user => user.email === email.value.toLowerCase())
    if (doesEmailExist) {
      toggleModal();
      return;
    }
    const user = {
      id: nanoid(7),
      username: username.value,
      email: email.value.toLowerCase(),
      language: language.value,
    }
    setUsers([...users, user]);
    e.target.reset();
  };
  return (
    <div className='App'>
      <Modal toggleModal={toggleModal} isOpen={isOpen}></Modal>
      <h1>Contact with us</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel possimus alias praesentium id sapiente, accusamus distinctio reprehenderit perferendis iure eum accusantium quas maiores unde temporibus cupiditate, minima illum voluptatem porro sed fuga! Labore nisi alias illum quaerat facilis praesentium molestias!</p>
      <form className='App__form' onSubmit={handleSubmit}>
        <input type="text" name='username' required placeholder='username' />
        <input type="mail" name='email' required placeholder='email' />
        <select name="language" id="language">
          <option value="JS">JS</option>
          <option value="REACT">REACT</option>
        </select>
        <input type="submit" value='continue' />
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
  )
}


import { nanoid } from 'nanoid'
import Modal from '../../components/Modal/Modal'
import './App.scss'
import classNames from 'classnames'
import React, { useState } from 'react';


export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'Sebastian',
      email: 'sebastian@gmail.com',
      language: "js"
    }
  ])
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);



  const toggleModal = () => setIsOpen(!isOpen)
  const togglePassword = () => setShowPassword(!showPassword)

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, username, language } = e.target;
    const isEmailExist = users.some(user => user.email === email.value.toLowerCase());
    if (isEmailExist) {
      toggleModal()
      return;
    }

    const user = {
      id: nanoid(7),
      username: username.value,
      email: email.value.toLowerCase(),
      language: language.value
    }
    console.log(user)
    setUsers([...users, user])
    e.target.reset();
  };


  return (
    <div className='App'>
      <Modal toggleModal={toggleModal} isOpen={isOpen} position='start' size="sm">
        <h2>User with thsi Email is alredy exist</h2>
      </Modal>
      <h1>Countact with US</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut repudiandae officiis porro temporibus fuga adipisci soluta perferendis tenetur, possimus delectus nesciunt, deserunt voluptatibus dolore quod fugiat, in ut eveniet architecto. Tempora eaque fugit dignissimos quas animi, aperiam earum voluptate quae.</p>
      <form className='App__form' onSubmit={handleSubmit}>
        <input type="email" name='email' placeholder='email' required />
        <input type="text" name='username' placeholder='username' required />
        <div className='App__form-password'>
          <input type={`${showPassword ? "text" : "password"}`} name='password' placeholder='password' />
          <i className={classNames("bi", {
            'bi-eye': !showPassword,
            'bi-eye-slash': showPassword,
          })} onClick={togglePassword}></i>
        </div>
        <input type="submit" value='continue' />
      </form>
      <hr />
      <ul className='App__list'>
        {users.map((elem, index) => {
          return <li key={elem.id}>
            <em className='language'>{elem.language}</em>
            <span>{index + 1}</span>
            <i className="bi bi-person-fill"></i>
            <p className='username'>
              {elem.username}
            </p>
            <div className='devider'></div>
            <i className="bi bi-envelope"></i>
            <p className='email'>
              {elem.email}
            </p>
          </li>
        })}
      </ul>

    </div>
  )
}


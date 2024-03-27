import React, { useState } from "react";
import { nanoid } from "nanoid";
import Modal from "../../components/Modal/Modal";
import "./App.scss";
import classNames from "classnames";

export default function () {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false)


  const togglePassword = () => {
    setShowPassword(!showPassword)

  }
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, email } = e.target;
    const isUsernameExist = users.some(
      (user) => user.username === username.value.toLowerCase()
    );
    if (isUsernameExist) {
      toggleModal();
      return;
    }

    const user = {
      id: nanoid(5),
      username: username.value,
      password: password.value,
      email: email.value.toLowerCase(),
    };
    setUsers([...users, user]);
    e.target.reset();
  };

  return (
    <div className="App">
      {isOpen ? (
        <Modal toggleModal={toggleModal} isOpen={isOpen}>
          <h3>The username is alredy taken</h3>
        </Modal>
      ) : (
        ""
      )}
      <form className="App__form" onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" required />
        <input
          type={`${showPassword ? "text" :  "password"}`}
          name="password"
          pattern="[0-9]{8,}"
          placeholder="Password"
          required
        />
        <i className={classNames('bx', {
          'bxs-show' : !showPassword,
          'bx-show' : showPassword,
        })} onClick={togglePassword}></i>
        <input type="email" name="email" placeholder="Your Email" required />
        <div className="App__checkbox">
          <input type="checkbox" />
          <p>Remember Me</p>
        </div>
        <div className="App__login">
          <input type="submit" value="LOGIN " />
          <p>Don't Have an Account? Sign Up!</p>
        </div>
      </form>
      <hr />

      <ul className="App__list">
        {users.map((elem, index) => {
          return (
            <li key={elem.id}>
              <span>{index + 1}</span>
              <i className="bx bxs-user"></i>
              <p className="username">{elem.username}</p>
              <i className="bx bxs-envelope"></i>
              <p className="email">{elem.email} </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

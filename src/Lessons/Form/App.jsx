import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import Modal from "../../components/Modal/Modal";
import "./App.scss";

export default function App() {
  const [users, setUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email } = e.target;
    const isEmailExist = users.some(
      (user) => user.email === email.value.toLowerCase()
    );
    if (isEmailExist) {
      toggleModal();
      return;
    }

    const user = {
      id: nanoid(7),
      username: username.value,
      email: email.value.toLowerCase(),
    };
    setUsers([...users, user]);
    e.target.reset();

    // const user = e.target.username.value;
    // if (!users.includes(user)) {
    //   setUsers([...users, user]);
    //   e.target.reset();
    // } else {
    //   arert("username is alredy exist");
    // }
  };

  return (
    <div className="App">
      {isOpen ? (
        <Modal toggleModal={toggleModal} isOpen={isOpen}>
          <h2>User with this email is alredy exist</h2>
        </Modal>
      ) : (
        ""
      )}
      <h1>Contact with us </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, odit
        nulla porro sint labore distinctio repellendus facilis autem
        voluptatibus atque consequatur assumenda. Sed nobis eveniet dignissimos
        quam voluptate obcaecati rerum.
      </p>
      <form className="App__form" onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="submit" value="continue" />
      </form>
      <hr />
      <ul className="App__list">
        {users.map((elem, index) => {
          return (
            <li key={elem.id}>
              <span>{index + 1}</span>
              <i className="bx bxs-user"></i>
              <p className="username">{elem.username}</p>
              <div className="devider"></div>
              <i className="bx bxs-envelope"></i>
              <p className="email">{elem.email}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

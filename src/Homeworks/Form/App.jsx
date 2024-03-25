import "./App.scss";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import classNames from "classnames";
export default function App() {
  const [users, setUsers] = useState([
    { id: 1, username: "Sebastion", email: "sebastian@gmail.com" },
  ]);

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email } = e.target;
    const isEmailExist = users.some(
      (user) => user.email === email.value.toLowerCase()
    );
    if (isEmailExist) {
      alert("alreday is existed");
      return;
    }
    const user = {
      id: nanoid(7),
      username: username.value,
      email: email.value.toLowerCase(),
    };
    setUsers([...users, user]);
  };

  return (
    <div className="App">
      <h1>Contact with US</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
        consequatur!
      </p>
      <form className="App__form" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="email" required />
        <input type="text" name="username" placeholder="username" required />
        <div className="App__form-password">
          <input
            type={`${showPassword ? "text" : "password"}`}
            name="password"
            placeholder="password"
          />
          <i
            className={classNames("bi", {
              "bi-eye": showPassword,
              "bi-eye-slash": !showPassword,
            })}
            onClick={togglePassword}
          ></i>
        </div>
        <input type="submit" value="continue" />
      </form>
      <hr />

      <ul className="App__list">
        {users.map((elem, index) => {
          return (
            <li key={elem.id}>
              <span>{index + 1}</span>
              <p className="username">{elem.username}</p>

              <p className="email">{elem.email}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";

import "./Users.scss";

export default function Users() {
  const [user, setUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios("https://fakestoreapi.com/users").then((res) => setUser(res.data));
  }, []);

  const handleSelectUser = (e) => {
    const selected = user.find((user) => user.id == e.target.value);
    setSelectedUser(selected);
  };

  return (
    <div className="Users">
      <select name="users" id="users" defaultValue='all' onChange={handleSelectUser}>
      <option value="all">All</option>
        {user.map((elem) => {
          return (
            <option value={elem.id} key={elem.id}>
              {elem.id}
            </option>
          );
        })}
      </select>
      <div>
        
        {!selectedUser ? (
          user.map((elem) => {
            return (
              <ul className="Users__id" key={elem.id}>
                <li>Id: {elem.id}</li>
                <li>Email: {elem.email}</li>
                <li>Username: {elem.username}</li>
                <li>Password: {elem.password}</li>
              </ul>
            );
          })
        ) : (
          <ul className="Users__id" key={selectedUser.id}>
            <li>Id: {selectedUser.id}</li>
            <li>Email: {selectedUser.email}</li>
            <li>Username: {selectedUser.username}</li>
            <li>Password: {selectedUser.password}</li>
          </ul>
        )}
      </div>
    </div>
  );
}

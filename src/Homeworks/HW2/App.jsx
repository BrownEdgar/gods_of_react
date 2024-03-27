import React, { useState } from "react";
import "./App.scss";

const data = [
  {
    id: 1,
    title: "Terminator",
    genre: "Action",
    stock: 6,
    rate: 2.5,
  },
  {
    id: 2,
    title: "Die Hard",
    genre: "Action",
    stock: 5,
    rate: 2.5,
  },
  {
    id: 3,
    title: "Get Out",
    genre: "Thriller",
    stock: 8,
    rate: 3.5,
  },
  {
    id: 4,
    title: "Trip to Italy",
    genre: "Comedy",
    stock: 7,
    rate: 3.5,
  },
  {
    id: 5,
    title: "Airplane",
    genre: "Comedy",
    stock: 7,
    rate: 3.5,
  },
];

export default function App() {
  const [list, setList] = useState(data);

  const update = (id) => {
    const copy = [...list];
    copy.splice(id, 1);
    setList(copy);
  };
  

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
          </tr>
        </thead>

        <tbody>
          {list.map((elem, id) => {
            return (
              <tr key={elem.id}>
                <td>{elem.title}</td>
                <td>{elem.genre}</td>
                <td>{elem.stock}</td>
                <td>{elem.rate}</td>
                <td className="App__btn" onClick={() => update(id)}>
                  Delete
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

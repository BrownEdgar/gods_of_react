import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
export default function App() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: 10,
        _start: 51,
      },
    }).then((res) => console.log(res.data));
  }, []);

  return (
    <div>
      <h1>Axios</h1>
    </div>
  );
}

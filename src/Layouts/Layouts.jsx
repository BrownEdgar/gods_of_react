import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import "./Layouts.scss";

export default function Layouts() {
  const [data, setData] = useState([1, 2, 3, 4]);
  return (
    <>
      <div className="container">
        <Outlet context />
      </div>
      <footer>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
          molestias quo ullam saepe, nobis dolore rem harum reprehenderit
          facilis inventore?
        </p>
      </footer>
    </>
  );
}

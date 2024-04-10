import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ROUTES from "../routes";
import { Home, Login, Product, Products, Users } from "./pagesTwo";
import LayoutsTwo from "./LayoutsTwo/LayoutsTwo";
import PrivateLayoutsTwo from "./LayoutsTwo/PrivateLayoutsTwo";
import Nav from "./components/Nav/Nav";

import "./AppTwo.scss";


export default function AppTwo() {
  const [user, setUser] = useState([
    {
      id: 1,
      username: "admin",
      password: "admin",
    },
  ]);

  const [isLogin, setIsLogin] = useState(localStorage.getItem("Login"));
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const valid = user.some((elem) => {
      return (
        elem.username === values.username && elem.password === values.password
      );
    });

    if (valid) {
      navigate("/");
      setIsLogin(true);
      localStorage.setItem("Login", true);
    } else {
      alert("invalid username");
      setIsLogin(false);
    }
  };

  return (
    <div className="AppTwo">
      <Nav isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path={ROUTES.HOME} element={<LayoutsTwo />}>
          <Route index element={<Home />} />
          <Route element={<PrivateLayoutsTwo isLogin={isLogin} />}>
            <Route path={ROUTES.PRODUCTS} element={<Products />} />
            <Route path={ROUTES.PRODUCT} element={<Product />} />
            <Route path={ROUTES.USERS} element={<Users />} />
          </Route>
          <Route
            path={ROUTES.LOGIN}
            element={<Login handleSubmit={handleSubmit} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

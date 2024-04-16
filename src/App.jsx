import React, { useState } from "react";
import { Home, About, Blog, Contact, Post, SignIn } from "./pages";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import ROUTES from "../routes";
import Layouts from "./Layouts/Layouts";
import PrivateLayouts from "./Layouts/PrivateLayouts";
import NavBar from "./components/NavBar/NavBar";

export default function () {
  const [user, setUser] = useState([
    {
      id: 1,
      email: "admin@gmail.com",
      password: "admin",
    },
  ]);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const valid = user.some((elem) => {
      return (
        elem.email === values.email.toLowerCase() &&
        elem.password === values.password
      );
    });
    if (valid) {
      navigate("/");
      setIsLogin(true);
    } else {
      alert("invalid user");
      setIsLogin(false);
    }
  };

  return (
    <div className="App">
      <NavBar isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path={ROUTES.HOME} element={<Layouts />}>
          <Route index element={<Home />} />
          <Route element={<PrivateLayouts isLogin={isLogin} />}>
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.BLOG} element={<Blog />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.POST} element={<Post />} />
          </Route>
          <Route
            path={ROUTES.SIGNIN}
            element={<SignIn handleSubmit={handleSubmit} />}
          />
          <Route path="*" element={<Navigate to={ROUTES.HOME} />} />
        </Route>
      </Routes>
    </div>
  );
}

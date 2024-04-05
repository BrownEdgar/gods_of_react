import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Home, About, Blog, Contact} from "./pages";
import ErrorPage from './pages/ErrorPage/ErrorPage'
import { Routes, Route, Navigate } from "react-router-dom";
import ROUTES from "../routes";

export default function () {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />}/>
        <Route path={ROUTES.ABOUT} element={<About />}/>
        <Route path={ROUTES.BLOG} element={<Blog />}/>
        <Route path={ROUTES.CONTACT} element={<Contact />}/>
        <Route path='*' element={<Navigate to={ROUTES.HOME}/>}/>
      </Routes>
    </div>
  );
}

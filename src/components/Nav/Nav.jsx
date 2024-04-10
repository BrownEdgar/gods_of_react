import React from "react";
import { Link, NavLink } from "react-router-dom";
import ROUTES from "../../../routes";

import "./Nav.scss";

export default function Nav({isLogin, setIsLogin}) {
  return (
    <div className="Nav">
      <div className="Nav__logo">
        <Link to={ROUTES.HOME}><img src="https://fakestoreapi.com/icons/logo.png" alt="fakestoreapi" /></Link>
        <Link to={ROUTES.HOME}><h1>Fake Store API</h1></Link>
      </div>
      <div className="Nav__content">
        <ul>
          <li>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.PRODUCTS}>Products</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.USERS}>Users</NavLink>
          </li>
          <li>
            {isLogin ? (
              <Link to={ROUTES.HOME} className="login" onClick={() => {
                setIsLogin(false)
                localStorage.removeItem("Login")}}>
                Logout
              </Link>
            ) : (
              <Link to={ROUTES.LOGIN} className="login">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

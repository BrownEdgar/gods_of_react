import React from "react";
import { Link, NavLink } from "react-router-dom";
import ROUTES from "../../../routes";

import "./Nav.scss";

export default function Nav({isLogin, setLogin}) {
  return (
    <div className="Nav">
      <div className="Nav__logo">
        <img src="https://fakestoreapi.com/icons/logo.png" alt="fakestoreapi" />
        <h2>Fake Store API</h2>
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
            {isLogin ? (
              <Link to={ROUTES.HOME} className="login" onClick={() => setLogin(false)}>
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

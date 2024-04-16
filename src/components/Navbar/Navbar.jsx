import React from "react";
import "./NavBar.scss";
import { Link, NavLink } from "react-router-dom";
import ROUTES from "../../../routes";

export default function NavBar({ isLogin, setIsLogin }) {
  return (
    <div className="NavBar">
      <div className="NavBar__logo">
        <h1>logo</h1>
        <Link to="/"></Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
          </li>
          {isLogin ? (
            <>
              <li>
                <NavLink to={ROUTES.ABOUT}>About</NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.BLOG}>Blog</NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
              </li>
            </>
          ) : null}
          <li>
            {isLogin ? (
              <Link
                to={ROUTES.HOME}
                className="login"
                onClick={() => setIsLogin(false)}
              >
                Logout
              </Link>
            ) : (
              <Link to={ROUTES.SIGNIN} className="login">
                Login
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

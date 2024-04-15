import React from "react";
import { Link, NavLink } from "react-router-dom";
import ROUTES from "../../routes";
import "./Navbar.scss";

export default function Navbar({ isLogin, setIsLogin }) {
  return (
    <header>
      <div className="logo">
        <a href="/">LOGO</a>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME}>Home</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ABOUT}>About</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.BLOG}>Posts</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.GALLERY}>Gallery</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.NEWS}>News</NavLink>
          </li>
          <li>
            {isLogin ? (
              <Link
                to={ROUTES.HOME}
                className="Link"
                onClick={() => setIsLogin(false)}
              >
                LOGOUT
              </Link>
            ) : (
              <Link to={ROUTES.LOGIN} className="Link">
                LOGIN
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

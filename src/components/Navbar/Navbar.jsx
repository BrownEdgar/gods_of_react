import React from 'react'
import './Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import ROUTES from '../../routes'

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <Link to={ROUTES.HOME}>LOGO</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={ROUTES.HOME}>HOME</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.ABOUT}>ABOUT</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.BLOG}>BLOG</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.GALLERY}>GALLERY</NavLink>
          </li>
          <li>
            <NavLink to={ROUTES.CONTACT}>CONTACT</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

import React from 'react'
import './NavBar.scss'
import { Link, NavLink } from 'react-router-dom'
import ROUTES from '../../../routes'

export default function NavBar() {
  return (
    <div className='NavBar'>
        <div className="NavBar__logo">
            <h1>logo</h1>
            <Link to="/"></Link>
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
                    <NavLink to={ROUTES.BLOG}>Blog</NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.CONTACT}>Contact</NavLink>
                </li>
                
            </ul>
        </nav>
    </div>
  )
}

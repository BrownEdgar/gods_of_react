import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ROUTES from '../../routes'
import './Navbar.scss'


export default function Navbar() {
  return (
    <header>
        <div className='logo'>
            <Link to={ROUTES.HOME}>LOGO</Link>
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
                <li>
                    <NavLink to={ROUTES.GALLERY}>Gallery</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

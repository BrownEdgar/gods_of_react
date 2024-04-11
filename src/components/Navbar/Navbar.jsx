import React from 'react'
import "./Navbar.scss"
import { Link, NavLink } from 'react-router-dom'
import ROUTES from '../../routes'

export default function Navbar() {
  return (
    <header>
      <div className="container menu">
        <div className="logo">
            <a href="Logo"><img src="https://impreza3.us-themes.com/wp-content/uploads/2015/10/logo1.png" alt="" /></a>
        </div>
        <nav>
            <ul>
                <li><NavLink to={ROUTES.HOME}>Home</NavLink></li>
                <li><NavLink to={ROUTES.PORTFOLIO} >Portfolio</NavLink></li>
                <li><NavLink to={ROUTES.ABOUT} >About us</NavLink></li>
                <li><NavLink to={ROUTES.BLOG} >Blog</NavLink></li>
                <li><NavLink to={ROUTES.CONTACT} >Contact</NavLink></li>
            </ul>
        </nav>
        <div className="socialMedia">
            <i className='bx bxl-facebook-circle'></i>
            <i className='bx bxl-instagram'></i>
            <i className='bx bxl-behance'></i>
            <i className='bx bxl-dribbble'></i>
        </div>
      </div>
    </header>
  )
}

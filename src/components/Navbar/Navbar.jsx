import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ROUTES from '../../routes'
import './Navbar.scss'


export default function Navbar({isLogin, setIsLogin}) {
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
                {
                    isLogin ? (
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
                <li>
                    <NavLink to={ROUTES.GALLERY}>Gallery</NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.PRODUCTS}>Products</NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.USERS}>Users</NavLink>
                </li>
                        </>
                    ) : null
                }
                <li>
                 {
                isLogin
                 ? <Link to={ROUTES.HOME} className='Link' onClick={() => {
                  setIsLogin(false);
                  localStorage.removeItem('login')
                 }}>Logout</Link>
                : <Link to={ROUTES.LOGIN} className='Link'>Login</Link>
                 }
                </li>
                
            </ul>
        </nav>
    </header>
  )
}

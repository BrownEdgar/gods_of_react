import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Home, About, Blog, Contact, ErrorPage, Gallery} from './pages'
import { Routes, Route, Navigate } from 'react-router-dom'
import ROUTES from './routes'
import './App.css'





export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.GALLERY} element={<Gallery />} />
        <Route path='*' element={<ErrorPage/>} />
      </Routes>
     

    </div>
  )
}

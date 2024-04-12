import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Home, Portfolio, AboutUs, Blog, Contact, Post, ErrorPage } from './pages'

import { Routes, Route } from "react-router-dom";
import ROUTES from './routes'


export default function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PORTFOLIO} element={<Portfolio />} />
        <Route path={ROUTES.ABOUT} element={<AboutUs />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.POST} element={<Post />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

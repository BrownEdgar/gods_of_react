import React from 'react'
import {Home, About, Blog, Contact, ErrorPage, Gallery, Products, Product, Users} from './pages'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layouts from './Layouts/Layouts'
import ROUTES from './routes'
import './App.css'


export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layouts/>}>
        <Route index element={<Home />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.BLOG} element={<Blog />} />
        <Route path={ROUTES.CONTACT} element={<Contact />} />
        <Route path={ROUTES.GALLERY} element={<Gallery />} />
        <Route path={ROUTES.PRODUCTS} element={<Products />} />
        <Route path={ROUTES.PRODUCT} element={<Product />} />
        <Route path={ROUTES.USERS} element={<Users />} />
        <Route path='*' element={<ErrorPage/>} />
        </Route>
      </Routes>
     

    </div>
  )
}

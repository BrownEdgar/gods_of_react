import React, { useState } from 'react'
import {Home, About, Blog, Contact, ErrorPage, Gallery, Products, Product, Users, Signin} from './pages'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Layouts from './Layouts/Layouts'
import PrivateLayouts from './Layouts/PrivateLayouts'
import ROUTES from './routes'
import './App.css'
import Navbar from './components/Navbar/Navbar'



export default function App() {
  const [users, setUsers] = useState([
    {
      id: "1",
      email: "admin@gmail.com",
      password: "admin"
    }
  ])
  const [isLogin, setIsLogin] = useState(localStorage.getItem('login'))
  const navigate = useNavigate()

  const handleSubmit = (values) => {
    const valid = users.some(user => {
      return user.email === values.email.toLowerCase() && user.password === values.password
    })

    if (valid) {
      navigate('/')
      setIsLogin(true)
      localStorage.setItem('login', true)
    } else {
      alert('invalid user')
      setIsLogin(false)
    }
  }

  return (
    <div className='App'>
        <Navbar isLogin={isLogin} setIsLogin={setIsLogin} />
      <Routes>
        <Route path={ROUTES.HOME} element={<Layouts />}>
          <Route index element={<Home />} />
          <Route element={<PrivateLayouts isLogin={isLogin} />}>
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.BLOG} element={<Blog />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.GALLERY} element={<Gallery />} />
          <Route path={ROUTES.PRODUCTS} element={<Products />} />
          <Route path={ROUTES.PRODUCT} element={<Product />} />
          <Route path={ROUTES.USERS} element={<Users />} />
        </Route>
        <Route path={ROUTES.LOGIN} element={<Signin handleSubmit={handleSubmit} />} />
        <Route path='*' element={<ErrorPage/>} />
        </Route>
      </Routes>
     

    </div>
  )
}

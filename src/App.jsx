import React, { useState } from 'react'
import { Home, Blog, About, Contact, ErrorPage, Gallery, Post, SignIn } from './pages'
import { Routes, Route, useNavigate, } from 'react-router-dom'
import Layouts from './Layouts/Layouts'
import ROUTES from './routes'

import './App.css'
import PrivateLayouts from './Layouts/PrivateLayouts'
import Navbar from './components/Navbar/Navbar'

export default function App() {
  const [users, setusers] = useState([
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
            <Route path={ROUTES.POST} element={<Post />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            <Route path={ROUTES.GALLERY} element={<Gallery />} />
          </Route>
          <Route path={ROUTES.LOGIN} element={<SignIn handleSubmit={handleSubmit} />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  )
}

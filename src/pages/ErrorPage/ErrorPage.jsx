import React from 'react'
import './ErrorPage.scss'
import { Link, useNavigate } from 'react-router-dom'
import ROUTES from '../../routes'

export default function ErrorPage() {
  const navigate = useNavigate()
  const goBack = () => {
    // navigate(ROUTES.HOME)
    navigate(-1)
  }
  return (
    <div className='ErrorPage'>
      <h1> 404 | Page Not Found </h1>
      <Link to={ROUTES.HOME}>GO HOME</Link>
      <button onClick={goBack}>Go Back</button>
    </div>
  )
}

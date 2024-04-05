import React from 'react'
import './ErrorPage.scss'
import ROUTES from '../../routes'
import { Link, useNavigate } from 'react-router-dom'

export default function ErrorPage() {
    const navigate = useNavigate()
    const goHome= ()=>{
        navigate({pathname: ROUTES.HOME })
    }
  return (
    <div className='ErrorPage'>
        <h1>404 | page Not found</h1>
        <Link to = {ROUTES.HOME}>Go home</Link>
        <button onClick={goHome}>go home</button>
    </div>
  )
}

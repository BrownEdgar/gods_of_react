import React from 'react'
import { Link, Outlet, } from 'react-router-dom'
import ROUTES from '../routes'

import './Layouts.scss'

export default function Layouts() {
  return (
    <>
      <div className="container">
        <Outlet />
      </div>
      <footer>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum amet maiores id ratione mollitia corrupti, est accusamus quidem iusto libero?</p>

      </footer>
    </>
  )
}

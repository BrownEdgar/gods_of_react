import React from 'react'
import './Layouts.scss'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

export default function Layouts() {
  return (
    <>
    <Navbar />
    <div className='container'>
        <Outlet />

    </div>
    </>
  )
}

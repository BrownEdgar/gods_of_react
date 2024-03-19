import React from 'react'
import './MyLoader.scss'
import Pulse from '../../assets/Pulse.svg'

export default function MyLoader() {
  return (
    <div className='MyLoader'>
        <img src={Pulse} alt="pulse loader" />
    </div>
  )
}

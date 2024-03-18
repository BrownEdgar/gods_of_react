import React, { Children } from 'react'
import './Modal.scss'

export default function Modal({children,toggleModal}) {
  return (
    <div className='Modal'>
        <div className='Modal__content'>{children}</div>
    </div>
  )
}

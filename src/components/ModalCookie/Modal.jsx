import React from 'react'
import './Modal.scss'
import classNames from 'classnames';

export default function Modal({children, isOpen, theme}) {
    console.log(isOpen);
  return (
    <div className='Modal'>
        <div className={classNames('Modal__content', {
          [`Modal__content-${theme}`] : true
        })}>
          
            {children}
        </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import './Modal.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default function Modal({children, theme, toggleModal, isOpen, size}) {

  useEffect(() => {
    const handleClick = (e) => {
const {className} = e.target;
if(className === 'Modal'){
  toggleModal()
}
    }
window.addEventListener('click', handleClick)

return () => {
  window.removeEventListener('click', handleClick)
}
  }, [])
  return (
    <div className='Modal'>
      <div className={classNames('Modal__content',{
        [`Modal__content-${theme}`] : true,
        [`Modal__content-${size}`] : true
      })}>
        
      {children}
      </div>
    </div>
  )
}


Modal.PropTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node),

  ])
}
 
import React, { Children, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'

export default function Modal({ children, toggleModal }) {

  useEffect(() => {
    const handleclick = (e) => {
      const { className } = e.target;
      if (className === "Modal") {
        toggleModal()
      }
    }
    window.addEventListener('click', handleclick)

    return () => {
      window.removeEventListener('click', handleclick)

    }
  }, [])


  return (
    <div className='Modal'>
      <div className='Modal__content'>
        {children}
      </div>
    </div>
  )
}


Modal.defaultPropTypes = {
  theme: 'light'
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
  // arr: PropTypes.arrayOf(PropTypes.number).isRequired
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node)
  ])
}
import React, { useEffect } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Modal.scss'

export default function Modal({ children, theme, toggleModal, isOpen, size, position }) {

  useEffect(() => {
    const handleClick = (e) => {
      const { className } = e.target;
      if (className === "Modal") {
        toggleModal()
      }
      console.log('click')
    }
    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [isOpen])

  if (!isOpen) {
    return null;
  }

  return (
    <div className='Modal'>
      <div className={classNames("Modal__content", {
        [`Modal__content-${theme}`]: true,
        [`Modal__content-${size}`]: true
      })}
        style={{ alignSelf: position }}
      >
        {children}
      </div>
    </div>
  )
}

Modal.defaultProps = {
  theme: 'dark',
  position: 'end',
}

Modal.propTypes = {
  position: PropTypes.oneOf(['start', 'center', "end"]),
  size: PropTypes.oneOf(['sm', 'md', "lg"]),
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node)
  ]),
}
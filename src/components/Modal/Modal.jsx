import React, { useEffect } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Modal.scss'

export default function Modal({ children, theme, toggleModal, isOpen }) {


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
  }, [])

  if (!isOpen) {
    return null;
  }

  return (
    <div className='Modal'>
      <div className={classNames("Modal__content", {
        [`Modal__content-${theme}`]: true
      })}>
        {children}
      </div>
    </div>
  )
}

Modal.defaultProps = {
  theme: 'light'
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  posts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  )
}
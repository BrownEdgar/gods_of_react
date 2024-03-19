import React from 'react'
import './Modal.scss'

export default function Modal({toggleModal, deleteByName}) {

  return (
    <div className='Modal'>
      <div className="Modal__content">
        <h1>Are you sure?</h1>
        <div className="Modal__content__btns">
            <div onClick={() => {deleteByName()}} className="btn">Yes!</div>
            <div onClick={() => {toggleModal()}} className="btn">No</div>
        </div>
      </div>
    </div>
  )
}

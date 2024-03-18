import React, { useState } from 'react'
import './App.scss'
import Modal from '../../components/Modal/Modal';

export default function App() {
  const [data, setData] = useState(
    ['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python']
  );
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState('')

  const toggleModal = () => setIsOpen(!isOpen);

  const deleteItemByName = () => {
    const result = data.filter(elem => elem !== currentItem);
    setData(result);
    setCurrentItem('');
    toggleModal();
  }

  return (
    <div className='App'>

      <Modal toggleModal={toggleModal} isOpen={isOpen} >
        <h1>Are you sure?</h1>
        <button onClick={toggleModal}>Close</button>
        <button onClick={deleteItemByName}>delete</button>
      </Modal>
      <h1 className='App__title'>React Modal example</h1>
      {data.map(elem => {
        return (
          <div key={elem} className='App__item'>
            <h2>{elem}</h2>
            <button onClick={() => {
              toggleModal()
              setCurrentItem(elem)
            }}>
              Delete
            </button>
          </div>
        )
      })}
    </div>
  )
}

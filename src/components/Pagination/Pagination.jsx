import React from 'react'
import './Pagination.scss'


export default function Pagination({ options, changePage }) {
  const arr = [];
  const total = Math.ceil(options.data.length / options.perPage)
  for (let i = 1; i <= total; i++) {
    arr.push(i)
  }

  return (
    <div className='Pagination'>
      <ul>
        {arr.map(item => {
          return (
            <li key={item} onClick={() => changePage(item)}>{item}</li>
          )
        })}

      </ul>
    </div>
  )
}

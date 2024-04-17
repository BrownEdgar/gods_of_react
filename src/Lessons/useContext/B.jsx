import React from 'react'
import C from './C'

export default function B() {
  console.log("B render")
  return (
    <div>
      <h1>component B</h1>
      <C />
    </div>
  )
}

import React, { useState, useEffect } from 'react';
import './App.scss'

export default function App() {
  return (
    <div className='App'>
      <form >
        <input type="text" name='username' />
        <input type="submit" value='continue' />
      </form>
    </div>
  )
}

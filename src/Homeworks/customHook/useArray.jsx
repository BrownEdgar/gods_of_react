import React, { useState } from 'react'

export default function useArray(initialState=[1, 2, 3, 4, 5, 6]) {
    const [state, setState] = useState(initialState)
    
    const newArr = [...state]
    newArr.push(7)
    const push = ()=> setState(newArr)
    const update = ()=> setState(state.toSpliced(1,1,9))
    const remove = ()=> setState(state.toSpliced(1,1))
    const filter = ()=> setState(state.filter(elem=> elem<4))
    const clear = () => setState(state.toSpliced(0))
  return [state, { push, update, remove, filter, clear }] 
}

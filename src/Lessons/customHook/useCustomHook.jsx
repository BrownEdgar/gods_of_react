import React, { useState } from 'react'

export default function useCustomHook(initialState = 0) {

  const [state, setState] = useState(initialState);
  const plus = () => setState(state + 1)
  const minus = () => setState(state - 1)
  const addRandom = () => setState(state + Math.round(Math.random() * 10))
  return [state, { plus, minus, addRandom }]
}

import { ADD_NEWS } from "./actionTypes"

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEWS: return payload

  

  default:
    return state
  }
}

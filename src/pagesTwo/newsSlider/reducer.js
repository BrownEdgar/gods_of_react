
const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "slider": return payload

  

  default:
    return state
  }
}

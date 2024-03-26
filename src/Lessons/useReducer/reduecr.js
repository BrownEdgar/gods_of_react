// import { ADD_COUNT, MINUS_COUNT, RESET_COUNT } from './actionTypes';
import ACTIONS from './actionTypes'
export const initialStateValue = {
  data: [10, 4, 8, 7, 5],
  total: 0
};

function reducer(state = initialStateValue, action) {
  switch (action.type) {
    case ACTIONS.ADD_ITEM: return [...state, action.payload]
    case ACTIONS.SET_TEN: return setRandom()
    case ACTIONS.SORT: return setSorted(state)
    case ACTIONS.DELETE_BY_INDEX: return deleteByIndex(state, action.payload)
    case ACTIONS.GET_TOTAL: return getTotal(state)
    default: return state
  }
}

const getTotal = (state) => {
  const sum = state.data.reduce((acc, cv) => acc + cv, 0);
  return {
    ...state,
    total: sum
  }
}

const deleteByIndex = (state, index) => {
  return state.toSpliced(index, 1)
}

const setSorted = (state) => {
  return state.toSorted((a, b) => a - b)
}
const setRandom = () => {
  return new Array(10).fill().map(() => Math.round(Math.random() * 1e3))
}

export default reducer;
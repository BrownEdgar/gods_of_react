import { ADD_ITEM, DELETE_BY_INDEX, SET_TEN, SORT } from "./actionTypes";

export const initialStateValue = [];

export default function reducer(state = initialStateValue, action) {
  switch (action.type) {
    case ADD_ITEM: return [...state, action.payload];
    case SET_TEN: return setRandom();
    case SORT: return setSorted(state)
    case DELETE_BY_INDEX: return deleteByIndex(state, action.payload)


    
    default: return state;
  }
}

const setRandom = () => {
return new Array(10).fill().map(() => Math.floor(Math.random() * 100))
}

const setSorted = (state) => {
    return state.toSorted((a, b) => a - b)
}

const deleteByIndex = (state, index) => {
    return state.toSpliced(index, 1)
}
    
    


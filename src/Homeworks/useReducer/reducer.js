import {ADD_RANDOM, ADD_USER, ADD_USERNAME, FILTER_ARRAY, SHAFFLE_ARRAY} from './actionTypes';

export const initialStateValue = {
    developers: [],
    user: {
      id: 1,
      name: "Armen"
    },
    arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9]
  }
  
  function reducer(state = initialStateValue, action) {
    switch (action.type) {
    
    case ADD_USER: return {
      ...state,
      user: {
        ...state.user,
        name: "Ani"
      }
    }
    case ADD_RANDOM: return addRandom(state)
    case SHAFFLE_ARRAY: return {
      ...state,
      arr: state.arr.toSorted(() => Math.random() > 0.5 ? 1: -1)
    }
    case FILTER_ARRAY: return{
      ...state,
      arr: state.arr.filter(elem => elem >10)
    }
    case ADD_USERNAME: return {
      ...state,
      developers:[...state.developers, action.payload]
    } 
    
      default: return state;
    }
  }
 
  const addRandom =(state) =>{
    const random = Math.round(Math.random()*(999-100) +100)
    return {
      ...state,
      arr: [...state.arr, random]
    }
   }


export default reducer;

 
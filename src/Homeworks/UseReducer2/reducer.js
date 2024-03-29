import { ADD_RANDOM, ARR_SORT, NUM_TRANSFER } from "./actionTypes";

export const initialStateValue = {
    numbers: [],
    posts: [],
    
    arr: ['html', 'css', 84, 'Java Script', 5, 74, 'React.js', 'Node.js', 'Python', 65, 32,]
  }

  function reducer(state = initialStateValue, action) {
    switch (action.type) {
    
        case ADD_RANDOM: return addRandom(state)
        case ARR_SORT: return setSorted(state)
        case NUM_TRANSFER: return setTransfer(state)
    
      default: return state;
    }
  }

  const addRandom =(state) =>{
    const random = Math.round(Math.random()*(999-100) +100)
    return {
      ...state,
      numbers: [random]
    }
   }
   const setSorted = (state) => {
    return {
        ...state,
        arr: state.arr.toSorted()
    }
  }
  const setTransfer = (state) =>{
    const  res = state.arr.filter(elem => typeof elem === 'number')
    return {
        ...state,
        numbers: [...state.numbers, res]

        

    }
  }


  export default reducer;
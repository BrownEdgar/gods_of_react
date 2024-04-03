// Ստեղծել կոճակներ որոնք կանեն հետևյալ գործողությունները
// - Jsonplaceholder -ից կստանա 4 հատ post և կպահի `posts` զանգվածի մեջ, զուգահեռ նաև կնկարի Էջում
// arrզանգվածի թվերը տեղափոխել nmbers զանգվածի մեջ
// post-ը պիտի ունենա X կոճակ, նրանց ջնջելու համար: Այսինքն եթե սեղմենք id:2 ունեցող post-ի այդ կոճակին գրելու եք կոդ,որ այն ջնջվի posts զանգվածից
// սերտավորել arr զանգվածը
// numbers զանգվածի մեջ ավելացնել պատահական եռանիշ թիվ

import { ADD_COUNT, GET_TOTAL, MINUS_COUNT, RESET_COUNT } from './ActionTypes';
export const initialState = {
  numbers: [],
  posts: [],
  arr: ['html', 'css', 84, 'Java Script', 5, 74, 'React.js', 'Node.js', 'Python', 65, 32,]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    
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
import { ADD_NUMBER, MOVE_NUMBERS, SET_POSTS, SORT } from "./actionType";

export const initialState = {
  numbers: [],
  posts: [],
  arr: [
    "html",
    "css",
    84,
    "Java Script",
    5,
    74,
    "React.js",
    "Node.js",
    "Python",
    65,
    32,
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return addRandom(state);

    case SORT:
      return sort(state);

    case MOVE_NUMBERS:
      return move(state);

    case SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

      
    default:
      return state;
  }
}

const addRandom = (state) => {
  const random = Math.round(Math.random() * (999 - 100) + 100);
  return {
    ...state,
    numbers: [...state.numbers, random],
  };
};

const sort = (state) => {
  return {
    ...state,
    arr: state.arr.sort((a, b) => {
      if (typeof a === "number" && typeof b === "number") {
        return a - b;
      }
      return String(a).localeCompare(String(b));
    }),
  };
};

const move = (state) => {
  return {
    ...state,
    numbers: state.arr.filter(elem => typeof elem === 'number'),
    arr: state.arr.filter(elem => typeof elem !== 'number')
  };
};

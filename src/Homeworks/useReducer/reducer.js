import { ADD_RANDOM, ADD_USERNAME, CHANGE_USER, SHUFFLE, TEN } from "./actionType";

export const initialState = {
  developers: [],
  user: {
    id: 1,
    name: "Armen",
  },
  arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER:
      return {
        ...state,
        user: {
          ...state.user,
          name: "Karen",
        },
      };
    case ADD_RANDOM:
      return addRandom(state);

    case SHUFFLE:
      return {
        ...state,
        arr: state.arr.toSorted(() => (Math.random() > 0.5 ? 1 : -1)),
      };
    case TEN:
      return {
        ...state,
        arr: state.arr.filter((elem) => elem >= 10),
      };

      case ADD_USERNAME: 
      return {
        ...state,
        developers: [...state.developers, action.payload]
      }

    default:
      return state;
  }
}

const addRandom = (state) => {
  const random = Math.round(Math.random() * (999 - 100) + 100);
  return {
    ...state,
    arr: [...state.arr, random],
  };
};

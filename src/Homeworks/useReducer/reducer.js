import { ADD_NUM, REMOVE_NUM } from "./actionType";

// export const initialState = {
//   developers: [],
//   user: {
//     id: 1,
//     name: "Armen",
//   },
//   arr: [154, 42, 1, 87, 695, 36, 2, 10, 39, 9],
// };
const min = 100;
const max = 999;

export default function reducer(state, action) {
  switch (action.type) {
    
    case ADD_NUM: return [...state, Math.floor(Math.random() * (max - min) + min)];
    case REMOVE_NUM: return removeNum(state);




    default:
      return state;
  }
}




const removeNum = (state) => {
  return state.filter((elem) => elem >= 500);
};

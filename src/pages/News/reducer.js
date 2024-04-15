import { ADD_BLOGS } from "./actionTypes";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_BLOGS:
      return payload;

    default:
      return state;
  }
};

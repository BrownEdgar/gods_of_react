import React from "react";
import { useReducer } from "react";
import reducer, { initialState } from "./reducer";
import "./App.scss";
import { ADD_USERNAME } from "./actionType";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const username = e.target[0].value
    dispatch({type: ADD_USERNAME, payload: username });
  };

  return (
    <div className="App">
      <pre>{JSON.stringify(state, null, 1)}</pre>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="user" required />
        <input type="submit" value="add  username" />
      </form>
      <div className="App__buttons">
        <button onClick={() => dispatch({ type: "CHANGE_USER" })}>
          change user
        </button>
        <button onClick={() => dispatch({ type: "ADD_RANDOM" })}>
          add random
        </button>
        <button onClick={() => dispatch({ type: "SHUFFLE" })}>shuffle</button>
        <button onClick={() => dispatch({ type: "TEN" })}>ten</button>
      </div>
    </div>
  );
}

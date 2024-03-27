import React, { useReducer } from "react";
import "./App.scss";
import reducer, { initialStateValue } from "./reducer";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialStateValue);

  const random = Math.floor(Math.random() * 100);
  const deleteRandom = Math.floor(Math.random() * state.length - 1);

  return (
    <div className="App">
      <h1 className="App__title">useReducer</h1>
      <h2 className="App__content">{JSON.stringify(state)}</h2>
      <div className="App__buttons">
        <button onClick={() => dispatch({ type: "ADD_ITEM", payload: random })}>add item</button>
        <button onClick={() => dispatch({ type: "SET_TEN" })}>set ten</button>
        <button onClick={() => dispatch({ type: "SORT" })}>sort</button>
        <button onClick={() => dispatch({ type: "DELETE_BY_INDEX", payload: deleteRandom })}>delet random index</button>
      </div>
    </div>
  );
}

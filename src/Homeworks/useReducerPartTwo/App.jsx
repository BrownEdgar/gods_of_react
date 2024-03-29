import React, { useEffect, useReducer } from "react";
import reducer, { initialState } from "./reducer";
import "./App.scss";
import axios from "axios";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  

  useEffect(() => {
    axios({
      baseURL: "https://jsonplaceholder.typicode.com",
      url: "posts",
      params: {
        _limit: 4,
      },
    }).then((response) =>
      dispatch({ type: "SET_POSTS", payload: response.data })
    );
  }, []);


  const deleteByIndex = (id) => {
    const result = state.posts.filter((elem) => elem.id !== id)
    dispatch({ type: "SET_POSTS", payload: result });
  };

  return (
    <div className="App">
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <div className="App__buttons">
        <button onClick={() => dispatch({ type: "ADD_NUMBER" })}> add number</button>
        <button onClick={() => dispatch({ type: "SORT" })}>sort</button>
        <button onClick={() => dispatch({ type: "MOVE_NUMBERS" })}>move</button>
      </div>
      <div className="App__posts">
        {state.posts.map((elem) => {
          return (
            <div key={elem.id}>
              <hr />
              {elem.title}
              <button onClick={deleteByIndex}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}



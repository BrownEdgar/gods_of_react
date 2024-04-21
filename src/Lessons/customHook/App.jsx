import React from "react";
// import useCustomHook from "./useCustomHook";
// import useFetchData from "./useFetchData";
import useArray from "./useArray";

export default function App() {
  // const [state, { plus, minus, reset, addRandom }] = useCustomHook(0);
  // const [data, loading, error] = useFetchData({
  //   url: "https://jsonplaceholder.typicode.com/posts",
  //   limit: 5,
  // });

  const [dataArr, {sort}] = useArray({count: 18, min: 0, max: 54})

  
  return (
    <div className="useCustomHook">
      {/* <h2>{state}</h2>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
      <button onClick={reset}>Reset</button>
      <button onClick={addRandom}>Add Random</button> */}
      <h2>Data:{JSON.stringify(dataArr, null, 1)}</h2>
      <button onClick={sort}>Sort</button>
    </div>
  );
}

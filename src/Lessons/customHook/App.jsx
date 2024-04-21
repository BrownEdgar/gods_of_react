import React from "react";
// import useCustomHook from "./useCustomHook";
// import useFetchData from "./useFetchData";
// import useArray from "./useArray";
import useArrayTwo from "./useArrayTwo";
import './App.scss'
// import Title from "Lessons/UI/Title/Title";

export default function App() {
  // const [state, { plus, minus, reset, addRandom }] = useCustomHook(0);
  // const [data, loading, error] = useFetchData({
  //   url: "https://jsonplaceholder.typicode.com/posts",
  //   limit: 5,
  // });

  // const [dataArr, {sort}] = useArray({count: 18, min: 0, max: 54})
  
  const initialValue = [1, 2, 3, 4, 5, 6]
  const [array, { set, push, remove, filter, update, clear }] = useArrayTwo(initialValue);

  return (
    <div className="useCustomHook">
      {/* <Title title='customHook' color='pink'/> */}
      {/* <h2>{state}</h2>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>Minus</button>
      <button onClick={reset}>Reset</button>
      <button onClick={addRandom}>Add Random</button>
      <h3>Data:{JSON.stringify(dataArr, null, 1)}</h3>
      <button onClick={sort}>Sort</button> */}
      <h2>{array.join(",")}</h2>
      <div className="useCustomHook__buttons">
      <button onClick={() => push(7)}>Add 7</button>
      <button onClick={() => update(1, 9)}>Change Second Element</button>
      <button onClick={() => remove(1, 9)}>Remove Second Element</button>
      <button onClick={() => filter(n => n < 3)}>Keep Numbers Less Than 4</button>
      <button onClick={() => set([1, 2])}>Set to 1, 2  </button>
      <button onClick={clear}>Clear</button>
      </div>
      
    </div>
  );
}

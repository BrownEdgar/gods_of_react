
import useArray from "./useArray"


export default function App() {
    const [state, { push, update, remove, filter, clear  }] = useArray([1, 2, 3, 4, 5, 6])
  return (
    <div>
    <h1>State: {JSON.stringify(state)}</h1>
    <button onClick={push}>Add 7</button>
    <button onClick={update}>Change Second Element To 9</button>
    <button onClick={remove}>Remove Second Element</button>
    <button onClick={filter}>Keep Numbers Less Than 4</button>
    <button onClick={clear}>Clear</button>

  </div>
  )
}

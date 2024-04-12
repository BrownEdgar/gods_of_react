import "./Post.scss"
import { useLocation } from "react-router-dom"

export default function Post() {
  const { state } = useLocation()
  return (
    <div className='Post'>
      <div key={state.id} className="PostContent">
        <img src={state.img} />
        <h1>{state.title}</h1>
        <p>{state.description}</p>
      </div>
    </div>
  )
}

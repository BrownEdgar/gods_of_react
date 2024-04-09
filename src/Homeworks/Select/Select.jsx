import react, { useState, useEffect } from "react"
import "./Select.scss"
import axios from "axios"
import { ids } from "../../utilts/constans"

export default function Select() {
    const [users, setUsers] = useState([])
    const [currId, setCurrId] = useState("all")
    const [filteredArr, setFiltaredArr] = useState([])

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users`).then((res) => {
        setUsers(res.data);
        setFiltaredArr(res.data)
        })
    }, [])

    useEffect(() => {
        if (currId === 'all') {
            setFiltaredArr(users)
        } else{
            console.log(currId)
            setFiltaredArr(users.filter(elem => elem.id === +currId))
        }
    }, [currId])

    const handleChange = (e) => {
        setCurrId(e.target.value)
    }

  return (
    <div className='Select'>
        <h1>Users</h1>
        <select name="ids" id="ids" defaultValue="all" onChange={handleChange}>
            <option value="all">all</option>
            {ids.map(elem => { return(
                <option value={elem} key={elem}>{elem}</option>
            )})
            }
        </select>
        <div className="Users">
            {
                filteredArr.map(elem => {
                    return <div className="User" key={elem.id}>
                        <p >{elem.name}</p>
                        <p>{elem.email}</p>
                    </div>
                })
            }
        </div>
    </div>
  )
}

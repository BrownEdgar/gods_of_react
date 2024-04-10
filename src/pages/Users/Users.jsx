import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { id } from '../../utils/constants';
import './Users.scss'


export default function Users() {
  const [users, setUsers] = useState([]);
  const [filteredArray, setFilteredArray] = useState([])
  const [currentId, setCurrentId] = useState('all')

  useEffect(() => {
      axios("https://jsonplaceholder.typicode.com/users?_limit=10")
      .then(res => {
        setUsers(res.data)
        setFilteredArray(res.data)
      })
  }, [])

  useEffect(() => {
    if(currentId === 'all'){
      setFilteredArray(users)
    }else{
      setFilteredArray(users.filter(elem => elem.id === currentId))
    }
  }, [currentId])
  
  
  const handleChange = (e) =>{
    setCurrentId(e.target.value)
  }
  return (
    <div>
        <h1>Users page</h1>
        <select name="id" id="id" defaultValue='all' onChange={handleChange}>
          <option value="all">All</option>
        {
          id.map(elem => {
            return (
              <option value={elem} key={elem}>
              {elem}
            </option>
           )

          })
        }
        </select>
        
        <div className="Users">
            {filteredArray.map(elem =>{
                    return( <div key={elem.id}  className='Users__item'>
                        <span>{elem.name}</span>
                        <span>{elem.username}</span>
                        <span>{elem.email}</span>
                    </div>
                    ) 
                })
            }

        </div>

    </div>
  )
}

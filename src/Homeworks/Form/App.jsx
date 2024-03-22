import React, { useState} from 'react';
import { nanoid } from 'nanoid'
import Modal from '../../components/Modal/Modal';
import "./App.scss"


export default function App() {
    const [users, setUsers] = useState([])


    const handleSubmit =(e) =>{
        e.preventDefault()
        const{ email, username, password} = e.target;
       
        const user ={
            id: nanoid(7),
            username: username.value,
            email: email.value.toLowerCase(),
            password: password.value.match(/\d/)
            
        }
        setUsers([...users, user])
        e.target.reset();
    }
    
  return (
    <div className='App'>
        <div className='App__form'>
        <h1>LOGIN FORM</h1>
        <form className='App__inputs' onSubmit={handleSubmit}>
        <input type="text" name='username' placeholder="Username"/>
        <input type="password" id="password" placeholder="Password" required></input>
        <input type="email" name='email'placeholder="Your Email"/>
        <label htmlFor="remember"><input type="checkbox" id="remember"/> <span>Remember Me</span></label>
        <input type="submit" value="LOGIN HERE"/>
        <p>Don'n Have an Account?  Sign up!</p>
        </form>
        </div>
        <div className = "App__block2">
        <ul className='App__list'>
            {users.map((elem, index)=>{
                return <li key={elem.id}>
                    <span>{index + 1}</span>
                    <p className='username'>{elem.username}</p>
                    <p className='password'>{elem.password}</p>
                    <p className='email'>{elem.email}</p>
                </li>
            })}
        </ul>
        </div>
        
        
       
    </div>
  )
}

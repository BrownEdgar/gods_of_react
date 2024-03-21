
import React, { useState} from 'react';
import { nanoid } from 'nanoid'
import Modal from '../../components/Modal/Modal';
import "./App.scss"


export default function App() {
    const [users, setUsers] = useState([])

    const [isOpen, setIsOpen] = useState(false)
    const toggleModal= () => setIsOpen (!isOpen)

    const handleSubmit =(e) =>{
        e.preventDefault()
        const{ email, username, language} = e.target;
        const isEmailExist = users.some(user => user.email === email.value.toLowerCase());
        if(isEmailExist){
            toggleModal()
            return;
        }
        const user ={
            id: nanoid(7),
            username: username.value,
            email: email.value.toLowerCase(),
            language: language.value
        }
        setUsers([...users, user])
        e.target.reset();
        //const user = e.target.username.value
        //if(!users.includes(user)){
        //    setUsers([...users, user]);
        //    e.target.reset();
        //}else{
        //    alert("username is already exist")
        //}
        
     
    }
  return (
    <div className='App'>
        <Modal toggleModal={toggleModal} isOpen={isOpen} position="start" size= "sm">
            <h2>User with this email is already exist</h2>
        </Modal>
        <h1>Contact with Us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Pariatur blanditiis rem earum doloribus in 
            dolorum praesentium soluta, iusto non magnam mollitia 
            quibusdam, magni rerum dolor, atque corrupti voluptate
             quae ducimus optio a maxime est sit voluptatem. Ipsam
              odit enim voluptate!
              </p>
        <form className='App__form' onSubmit={handleSubmit}>
            <input type="email" name='email'placeholder="email" required/>
            <input type="text" name='username' placeholder="userName" required/>
            <select name="language" id="language" defaultValue="react">
                <option value="js">js</option>
                <option value="react">react</option>
            </select>
            <input type="submit" value='continue' />
        </form>
        <hr />
        <ul className='App__list'>
            {users.map((elem, index)=>{
                return <li key={elem.id}>
                    <em className="language">{elem.language}</em>
                    <span>{index + 1}</span>
                    <p className='username'>{elem.username}
                    <i className="bi bi-person-heart"></i></p>
                    <div className='devider'></div>
                    <p className='email'>{elem.email}
                    <i className="bi bi-envelope"></i></p>
                </li>
            })}
        </ul>
    </div>
  )
}

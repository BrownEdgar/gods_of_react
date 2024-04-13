import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import './Layouts.scss'

export default function Layouts() {
  return (
    <>
    <div className='container'>
        <Outlet />
    </div>
    <footer>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Nostrum incidunt repellat dolor dignissimos sed ut sit 
         dolorem, eligendi accusantium rem.
         </p>
    </footer>
    </>
  )
}

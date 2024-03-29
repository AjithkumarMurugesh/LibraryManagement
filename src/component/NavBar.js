import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

export default function NavBar(){
  const auth = useAuth()
  return (
    <div className='Navbar'>
        <div className='Lib'>
            <h1>Lib</h1>
        </div>
        <div className='nav'>
            <NavLink to='/'>Home</NavLink>
            { auth.user && <NavLink to='/user'>User</NavLink> }
            { auth.user === 'admin' && <NavLink to='/admin'>Admin</NavLink> }
            { !auth.user && <NavLink to='/login'>Login</NavLink> }
x
            { auth.user && <button onClick={()=>{
              auth.logout()
            }}>Log out</button> }
        </div>
    </div>
  )
}

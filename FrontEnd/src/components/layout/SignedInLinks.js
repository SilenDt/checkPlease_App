import React  from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {Button} from "react-bootstrap"
import { useAuth } from '../../contexts/AuthContext';

const SignedInLinks = () => {
    const navigate = useNavigate()
    const {logout} = useAuth()
    
    async function handleClick(e) {
        e.preventDefault()
        try{
           await logout() 
           navigate("/signin")
        } catch{
            return "Failed to logout"
        }

    }
   return (
    <>
        <NavLink to='/' className='temp'>Home</NavLink>
        <NavLink to='/profile' className='temp'>Profile</NavLink>
        <Button variant="link" onClick={handleClick}>Log Out</Button>
        {/* <li><NavLink to='/' className="temp">NN</NavLink></li> */}
    </>
   )
}
export default SignedInLinks
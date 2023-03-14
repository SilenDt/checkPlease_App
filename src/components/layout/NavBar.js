import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {useAuth} from "../../contexts/AuthContext"
 
const NavBar = () => {
    const isLoggedIn = useAuth()
    console.log(isLoggedIn.currentUser)
    return (
        <nav className="temp">
            <div className='container'>
            {/* <Link to='/' className='temp'>CheckPlease</Link> */}
                {isLoggedIn.currentUser ? <SignedInLinks/> : <SignedOutLinks/>}
            </div>
        </nav>
    )
 }
 export default NavBar
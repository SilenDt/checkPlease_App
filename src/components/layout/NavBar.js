import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
 
const NavBar = () => {
    return (
        <nav className="temp">
            <div className='container'>
                <Link to='/' className='temp'>CheckPlease</Link>
                <SignedInLinks/>
                <SignedOutLinks/>
            </div>
        </nav>
    )
 }
 export default NavBar
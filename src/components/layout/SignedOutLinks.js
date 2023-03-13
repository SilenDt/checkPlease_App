import React from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {
   return (
       <ul className='temp'>
        <li><NavLink to='/signup'>Sign up</NavLink></li>
        <li><NavLink to='/signin'>Sign in</NavLink></li>
        {/* <li><NavLink to='/' className='temp'>NN</NavLink></li> */}
       </ul>
   )
}
export default SignedOutLinks
import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {Button} from "react-bootstrap"
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const SignedOutLinks = () => {    
   return (
       <>
        <Button variant="outline-primary" as={Link} to="/signup">
              Sign Up
        </Button>
        <Button variant="primary" as={Link} to="/signin" className="ms-2">
            Sign In
        </Button>
        {/* <li><NavLink to='/' className='temp'>NN</NavLink></li> */}
       </>
   )
}
export default SignedOutLinks
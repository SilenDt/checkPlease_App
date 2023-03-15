// import React from 'react';
// import {Link} from 'react-router-dom';
// import SignedInLinks from './SignedInLinks';
// import SignedOutLinks from './SignedOutLinks';
// import {useAuth} from "../../contexts/AuthContext"
 
// const NavBar = () => {
//     const isLoggedIn = useAuth()
//     console.log(isLoggedIn.currentUser)
//     return (
//         <nav className="temp">
//             <div className='container'>
//             {/* <Link to='/' className='temp'>CheckPlease</Link> */}
//                 {isLoggedIn.currentUser ? <SignedInLinks/> : <SignedOutLinks/>}
//             </div>
//         </nav>
//     )
// }

//  export default NavBar

// ------------------original ^ ----------------------



import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { useAuth } from '../../contexts/AuthContext';
import { Navbar, Container, Nav, Button, Row } from 'react-bootstrap';

const NavBar = () => {
  const isLoggedIn = useAuth();
  console.log(isLoggedIn.currentUser);

  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          CheckPlease
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isLoggedIn.currentUser ? (
              <SignedInLinks />
            ) : (
              <SignedOutLinks />
            )}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;




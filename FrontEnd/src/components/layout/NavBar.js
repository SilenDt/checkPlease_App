import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { useAuth } from '../../contexts/AuthContext';
import {Image, Navbar, Container} from 'react-bootstrap';
import logo from '../images/logo.png'

const NavBar = () => {
  const isLoggedIn = useAuth();

  return (
    <Navbar bg="light" expand="xl">
      <Container>
        <Navbar.Brand 
          as={Link} 
          to="/"
          >
          <Image 
          src={logo} 
          width="100" 
          height="70" 
          style={{float: "left"}}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            {isLoggedIn.currentUser ? (
              <SignedInLinks />
              ) : (
                <SignedOutLinks />
              )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

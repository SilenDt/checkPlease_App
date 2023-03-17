import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { useAuth } from '../../contexts/AuthContext';
import { Stack, Image, Navbar, Container, Nav, Button, Row, Col, FloatingLabel, Form } from 'react-bootstrap';
import { fromBits } from 'long';
import logo from '../images/logo.png'

const NavBar = () => {
  const isLoggedIn = useAuth();
  console.log(isLoggedIn.currentUser);

  return (
    <Navbar bg="light" expand="lg">
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
        <Nav></Nav>
            {isLoggedIn.currentUser ? (
              <SignedInLinks />
              ) : (
                <SignedOutLinks />
              )}
      </Container>
    </Navbar>
  );
};

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { useAuth } from '../../contexts/AuthContext';
import { Navbar, Container, Nav, Button, Row, Col, FloatingLabel, Form } from 'react-bootstrap';
import { fromBits } from 'long';
import logo from '../images/logo.png'

const NavBar = () => {
  const isLoggedIn = useAuth();
  console.log(isLoggedIn.currentUser);

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
    <img src={logo} width="100" height="70"></img>
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
      </Container>
      
    </Navbar>
  );
};

export default NavBar;




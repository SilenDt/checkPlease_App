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
    <img src={logo} width="70" height="70"></img>
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
      <Container>
      <Row className="g-2">
    <Col md>
      <FloatingLabel controlId="floatingInputGrid" label="input-choice">
        <Form.Control type="Search here..."/>
      </FloatingLabel>
    </Col>
    <Col md>
      <FloatingLabel
        controlId="floatingSelectGrid"
        label="Works with selects"
      >
        <Form.Select aria-label="Floating label select example">
          <option>Open this select menu</option>
          <option value="1">Company Name</option>
          <option value="2">Location</option>
          <option value="3">Job Title</option>
        </Form.Select>
      </FloatingLabel>
    </Col>
  </Row>
  </Container>
    </Navbar>
  );
};

export default NavBar;




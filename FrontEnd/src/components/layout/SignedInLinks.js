import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { useAuth } from '../../contexts/AuthContext';

const SignedInLinks = () => {
    const navigate = useNavigate()
    const { logout } = useAuth()

    async function handleClick(e) {
        e.preventDefault()
        try {
            await logout()
            navigate("/signin")
        } catch {
            return "Failed to logout"
        }

    }
    return (
        <>
            <Nav className="me-auto">
            <Nav.Link to='/' className='home-page'>Home</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
            <NavDropdown title="My account" id="my-account-dropdown">
                <NavDropdown.Item href='/profile' className='profile-page'>Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <Button variant="link" onClick={handleClick}>Log Out</Button>
            </NavDropdown>
            </Nav>
        </>
    )
}

export default SignedInLinks
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, NavDropdown, Nav } from "react-bootstrap"
import { useAuth } from '../../contexts/AuthContext';

const SignedInLinks = () => {
    const navigate = useNavigate()
    const { logout } = useAuth()
    const {currentUser, setCurrentUser} = useAuth()

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
            <Nav.Link href='/' className='home-page'>Home</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
            <NavDropdown title="My account" id="my-account-dropdown" style={{width: "30%"}}>
                <NavDropdown.Item href={`/profile/${currentUser.uid}`} className='profile-page'>Profile</NavDropdown.Item>
                <NavDropdown.Item href={`/update-profile/${currentUser.uid}`} className='profile-page'>Update profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <Button variant="link" onClick={handleClick}>Log Out</Button>
            </NavDropdown>
            </Nav>
        </>
    )
}

export default SignedInLinks
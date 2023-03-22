import React from 'react';
import { Nav, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <>
            <Nav className="ml-auto" style={{maxWidth:"20%"}}>
                <Button variant="outline-primary" as={Link} to="/signup" className="m-1">Sign Up</Button>
                <Button variant="primary" as={Link} to="/signin" className="m-1">Sign In</Button>
            </Nav>
        </>
    )
}

export default SignedOutLinks
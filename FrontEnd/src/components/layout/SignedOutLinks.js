import React from 'react';
import { Nav, Button } from "react-bootstrap"
import { Link } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
        <>
            <Nav className="ml-auto">
                <Button variant="outline-primary" as={Link} to="/signup">
                    Sign Up
                </Button>
                <Button variant="primary" as={Link} to="/signin" className="ms-2">
                    Sign In
                </Button>
            </Nav>
        </>
    )
}

export default SignedOutLinks
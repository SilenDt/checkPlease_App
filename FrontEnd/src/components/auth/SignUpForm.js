import React, {useRef, useState} from "react";
import {Container, Form, Card, Button, Alert} from "react-bootstrap"
import {useAuth} from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import { postUser } from "../../services/UserService";

const SignUpForm = () => {

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    // const {SignUpForm} = useAuth()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        if(firstNameRef === null || lastNameRef === null){
            setError("All fields are required")
        }
        try{
            setError("")
            setLoading(true)
            const userDetails={
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value
            }
            await postUser(userDetails)
            navigate("/")
        } catch {
            setError("failed to post user details")
        }
        setLoading(false)
    }

    return (
        <div>
            <Container className="mt-3 d-flex align-items-center justify-content-center">
                <Card>
                    <Card.Body>
                    <h2>Please enter your details below</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="firstName">
                            <Form.Label>First name </Form.Label>
                            <Form.Control type="firstName" ref={firstNameRef} required></Form.Control>
                        </Form.Group>

                        <Form.Group id="lastName">
                            <Form.Label>Last name </Form.Label>
                            <Form.Control type="lastName" ref={lastNameRef} required></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 mt-2" type="submit">Sign Up</Button>
                    </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default SignUpForm
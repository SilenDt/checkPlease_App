import React, {useRef, useState} from "react";
import {Form, Card, Button, Alert} from "react-bootstrap"
import {useAuth} from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";

const SignUpForm = () => {

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const {SignUpForm} = useAuth()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        // db.collection('userData').add({
        //     firstName: firstNameRef.current.value,
        //     lastName: lastNameRef.current.value
        // })
        try{
            setError("")
            setLoading(true)
            await SignUpForm(firstNameRef.current.value,lastNameRef.current.value)
            navigate("/")
        } catch {
            setError("failed to create an account")
        }
        setLoading(false)
    }

    return (
        <div>
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
                    <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SignUpForm
import React, {useRef, useState} from "react";
import {Form, Card, Button, Alert} from "react-bootstrap"
import {useAuth} from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom";

const SignUp = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const {SignUp} = useAuth()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("passwords did not match ")  
        }

        if (passwordRef.current.value.length < 6 ) {
            return setError("password must be atleast 6 characters long")
        }

        try{
            setError("")
            setLoading(true)
            await SignUp(emailRef.current.value,passwordRef.current.value)
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
                <h2>Sign Up Below</h2>
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" ref={emailRef} required></Form.Control>
                    </Form.Group>
                
                    <Form.Group id="password">
                        <Form.Label>Password </Form.Label>
                        <Form.Control type="password" ref={passwordRef} required></Form.Control>
                    </Form.Group>

                    <Form.Group id="password-confirm">
                        <Form.Label>Confirm Password </Form.Label>
                        <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                    </Form.Group>
                    <Button disabled={loading} className="w-100" type="submit">Sign Up</Button>
                </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SignUp
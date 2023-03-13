import React, {useRef, useState} from "react";
import {Form, Card, Button, Alert} from "react-bootstrap"
import {useAuth} from "../../contexts/AuthContext"

const SignUp = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const {SignUp} = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("password did not match ")  
        }
        try{
            setError("")
            setLoading(true)
            await SignUp(emailRef.current.value,passwordRef.current.value)
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
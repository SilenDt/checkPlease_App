import React, { useRef, useState } from "react";
import { Form, Card, Button, Alert, FormText } from "react-bootstrap"
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext"
import SignUp from "./SignUp";

const ForgotPassword = () => {

    const emailRef = useRef()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState()
    const [error, setError] = useState()
    const { resetPassword } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
            // clear()
        } catch {
            setError("Failed to reset password")
        }
        setLoading(false)
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2>Password Reset</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>

                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Reset Password</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/signin">Sign In</Link>
                    </div>

                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-3">Don't have an account with us?
                <Link to={"/signup"} className="w-100 text-center mt-3"> Register</Link>
            </div>
        </div>
    )
}

export default ForgotPassword
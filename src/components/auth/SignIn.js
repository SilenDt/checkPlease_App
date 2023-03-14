import React, {useRef, useState} from "react";
import {Form, Card, Button, Alert} from "react-bootstrap"
import {useAuth} from "../../contexts/AuthContext"
import {useNavigate, Link } from "react-router-dom";
import SignUp from "./SignUp";

const SignIn = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const {SignIn} = useAuth()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await SignIn(emailRef.current.value,passwordRef.current.value)
            navigate("/")

        } catch {
            setError("You do not have an account with us")

        }
        setLoading(false)
    }

    return (
        <div>
            <Card>
                <Card.Body>
                    <h2>Sign In Below</h2>
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
                        <Button disabled={loading} className="w-100" type="submit">Sign In</Button>

                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot passowrd?</Link>
                    </div>

                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-3">Don't have an account with us?
                <Link to={"/signup"} className="w-100 text-center mt-3"> Register</Link>
            </div>
        </div>
    )
}

export default SignIn
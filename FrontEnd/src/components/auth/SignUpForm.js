import React, { useRef, useState } from "react";
import { Container, Form, Card, Button, Alert, Dropdown } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom";
import { db } from "../../config/firebase";
import { postUser } from "../../services/UserService";

const SignUpForm = () => {

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const userTownRef = useRef()
    const placeOfWorkRef = useRef()
    const locationOfPlaceOfWorkRef = useRef()
    const jobTypeRef = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const { currentUser, setCurrentUser } = useAuth()
    const [dropdownJob, setDropdownJob] = useState("")
    const navigate = useNavigate()




    async function handleSubmit(e) {
        e.preventDefault();
        console.log(currentUser.uid)
        // if(firstNameRef === null || lastNameRef === null){
        //     setError("All fields are required")
        // }
        try {
            setError("")
            setLoading(true)
            const userDetails = {
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                userTown: userTownRef.current.value,
                locationOfPlaceOfWork: locationOfPlaceOfWorkRef.current.value,
                jobType: jobTypeRef.current.value,
                uid: currentUser.uid,
                userEmail: currentUser.email
            }
            await postUser(userDetails)
            navigate("/")
        } catch {
            setError("failed to post user details")
        }
        setLoading(false)
    }

    const handleClick = (e) => {
        const chosenJob = e.target.value
        setDropdownJob(chosenJob) 

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
                                <Form.Control type="firstName" ref={firstNameRef} required ></Form.Control>
                            </Form.Group>

                            <Form.Group id="lastName">
                                <Form.Label>Last name </Form.Label>
                                <Form.Control type="lastName" ref={lastNameRef} required ></Form.Control>
                            </Form.Group>
                            <Form.Group id="userTown">
                                <Form.Label>What town/city do you live in? </Form.Label>
                                <Form.Control type="userTown" ref={userTownRef} ></Form.Control>
                            </Form.Group>
                            <Form.Group id="placeOfWork">
                                <Form.Label>What town/city do you work in? </Form.Label>
                                <Form.Control type="placeOfWork" ref={locationOfPlaceOfWorkRef} ></Form.Control>
                            </Form.Group>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic" onSelect={handleClick} value={dropdownJob}>
                                    Job Title (choose closest match)
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item ref={jobTypeRef} >Server</Dropdown.Item>
                                    <Dropdown.Item ref={jobTypeRef} >Cook</Dropdown.Item>
                                    <Dropdown.Item ref={jobTypeRef} >Busser</Dropdown.Item>
                                    <Dropdown.Item ref={jobTypeRef} >Bartender</Dropdown.Item>
                                    <Dropdown.Item ref={jobTypeRef} >Dishwasher</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Button disabled={loading} className="w-100 mt-2" type="submit">Sign Up</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default SignUpForm
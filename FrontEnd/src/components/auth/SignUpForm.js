import React, { useRef, useState } from "react";
import { Container, Form, Card, Button, Alert, Dropdown } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate } from "react-router-dom";
import { postUser } from "../../services/UserServices";

const SignUpForm = ({jobTypes}) => {

    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const userTownRef = useRef()
    const placeOfWorkRef = useRef()
    const locationOfPlaceOfWorkRef = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const { currentUser, setCurrentUser } = useAuth()
    const [selectJob, setSelectJob] = useState()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        if(!selectJob) {
           return setError("Please select a job type from the dropdown, if none apply choose closest match")
        }
        try {
            setError("")
            setLoading(true)
            const userDetails = {
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                userTown: userTownRef.current.value,
                placeOfWork: placeOfWorkRef.current.value,
                locationOfPlaceOfWork: locationOfPlaceOfWorkRef.current.value,
                jobType: selectJob,
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

    const currentJobTypes = jobTypes.map((jobType) => (
            <option key={jobType.id} value={jobType.jobRole}>{jobType.jobRole}</option>
    ));

    const handleClick = (e) => {
        const findObj=jobTypes.find(job=>job.jobRole===e.target.value)
        setSelectJob(findObj) 
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
                                <Form.Label>What company do you work for? </Form.Label>
                                <Form.Control type="placeOfWork" ref={placeOfWorkRef} ></Form.Control>
                            </Form.Group>
                            <Form.Group id="locationOfPlaceOfWork">
                                <Form.Label>What town/city do you work in? </Form.Label>
                                <Form.Control type="locationOfPlaceOfWork" ref={locationOfPlaceOfWorkRef} ></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Job Role:</Form.Label>
                                <Form.Select onChange={handleClick}>
                                    <option key="chooseOption">Choose an option (Leave blank for none)..</option>
                                    {currentJobTypes}
                                </Form.Select>
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
import { Button, Container, Form, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import React, { useRef, useState, useEffect } from 'react'
import { updateUser } from "../../services/UserServices"
import { useNavigate } from "react-router-dom"

export default function UpdateProfile({ userDetailsByUid, jobTypes }) {
    const { currentUser, setCurrentUser } = useAuth()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const userTownRef = useRef()
    const locationOfPlaceOfWorkRef = useRef()
    const [loading, setLoading] = useState(false)
    const [selectJob, setSelectJob] = useState()
    const [error, setError] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        const findObj=jobTypes.find(job=>job.jobRole == userDetailsByUid.jobType.jobRole)
        setSelectJob(findObj) 
    }, [])

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("")
            setLoading(true)
            const userDetails = {
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                jobType: selectJob,
                userTown: userTownRef.current.value,
                locationOfPlaceOfWork: locationOfPlaceOfWorkRef.current.value
            }
            console.log(userDetails)
            await updateUser(currentUser.uid, userDetails)
            navigate("/")
        } catch {
            setError("failed to update user details")
        }
        setLoading(false)
    }

        const currentJobTypes = jobTypes.map((jobType) => (
            <option value={jobType.jobRole}>{jobType.jobRole}</option>
    ));

    const handleClick = (e) => {
        console.log("this is the e.target.value")
        console.log(typeof e.target.value)
        console.log(e.target.value)

        const findObj=jobTypes.find(job=>job.jobRole===e.target.value)
        setSelectJob(findObj) 
    }
    console.log("this is the userdetailsByUid")
    console.log(userDetailsByUid)
    console.log(selectJob)


    return (
        <div>
            <Container className="mt-3 d-flex align-items-center justify-content-center">
                <Card>
                    <Card.Body>
                        <h2>Update your profile</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Card.Title>Email:</Card.Title>
                        <Card.Text>{currentUser.email}</Card.Text>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="firstName">
                                <Form.Label>First name </Form.Label>
                                <Form.Control type="firstName" ref={firstNameRef} defaultValue={userDetailsByUid.firstName} required ></Form.Control>
                            </Form.Group>

                            <Form.Group id="lastName">
                                <Form.Label>Last name </Form.Label>
                                <Form.Control type="lastName" ref={lastNameRef} defaultValue={userDetailsByUid.lastName} required ></Form.Control>
                            </Form.Group>
                            <Form.Group id="userTown">
                                <Form.Label>What town/city do you live in? </Form.Label>
                                <Form.Control type="userTown" ref={userTownRef} defaultValue={userDetailsByUid.userTown}></Form.Control>
                            </Form.Group>
                            <Form.Group id="placeOfWork">
                                <Form.Label>What town/city do you work in? </Form.Label>
                                <Form.Control type="placeOfWork" ref={locationOfPlaceOfWorkRef} defaultValue={userDetailsByUid.locationOfPlaceOfWork}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Job Role:</Form.Label>
                                <Form.Select onChange={handleClick}  >
                                    <option key="currentJobType" value={userDetailsByUid.jobType.jobRole}>{userDetailsByUid.jobType.jobRole}</option>
                                    {currentJobTypes}
                                </Form.Select>
                            </Form.Group>
                            <Button disabled={loading} className="w-100 mt-2" type="submit">Update</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
} 
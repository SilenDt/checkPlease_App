import { Button, Container, Form, Card, Link} from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import React, { useRef, useState } from 'react'
import { updateUser } from "../../services/UserServices"
import { useNavigate } from "react-router-dom"

export default function UpdateProfile({userDetailsByUid}) {
    const {currentUser, setCurrentUser} = useAuth()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const userTownRef = useRef()
    const locationOfPlaceOfWorkRef = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("")
            setLoading(true)
            const userDetails = {
                firstName: firstNameRef.current.value,
                lastName: lastNameRef.current.value,
                userTown: userTownRef.current.value,
                locationOfPlaceOfWork: locationOfPlaceOfWorkRef.current.value,
                // jobType: selectJob.current.value,
            }
            await updateUser(currentUser.uid, userDetails)
            console.log("this is the user details  " + currentUser.uid + " and " + userDetails.firstName)
            navigate("/")
        } catch {
            setError("failed to update user details")
        }
        setLoading(false)
    }

  return (
    <div>
        <Container className="mt-3 d-flex align-items-center justify-content-center">
            <Card>
                <Card.Body>
                    <h2>Update your profile</h2>
                    {/* {error && <Alert variant="danger">{error}</Alert>} */}
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
                        {/* <Form.Label>What job did you do in your last role? (choose closest)</Form.Label>
                        <Form.Select onChange={handleClick} value={selectJob} placeholder="Choose an option..">
                            <option value="Server">Server</option>
                            <option value="Cook">Cook</option>
                            <option value="Busser">Busser</option>
                            <option value="Bartender">Bartender</option>
                            <option value="Dishwasher">Dishwasher</option>
                        </Form.Select> */}
                        <Button disabled={loading} className="w-100 mt-2" type="submit">Update</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}
import React, {useState} from 'react'
import { Container, Card, Col, Row, ListGroup } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link, useParams} from 'react-router-dom'


export default function Profile({userDetailsByUid}) {
//   const [error, setError] = useState()
  const {currentUser, setCurrentUser} = useAuth()

  // const {uid} = useParams()

  console.log("This is on the profile page")
  console.log(userDetailsByUid)

  return (
  <>    
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header><h2 className="text-center mb-4">Profile</h2></Card.Header>
              
              <Row>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWa7dpWBjhQVy7rFc2ETvnSJ1iMuZXyEAgw&usqp=CAU"/>
                      <Card.Body>
                        <Card.Title><h2>{userDetailsByUid.firstName}  {userDetailsByUid.lastName}</h2></Card.Title>
                        {/* <Card.Title>Email:</Card.Title> */}
                        <Card.Text>{currentUser.email}</Card.Text>

                          <Row>
                            <Card.Title>Current City:</Card.Title> 
                            <Card.Text>{userDetailsByUid.userTown}</Card.Text>
                          </Row>

                          <Row>
                            <Card.Title>Town you work in:</Card.Title>
                            <Card.Text>{userDetailsByUid.locationOfPlaceOfWork}</Card.Text>
                          </Row>    

                          <Link to="/update-profile/:id" className="btn btn-primary w-100 mt-3">
                          Update profile
                          </Link>
                      </Card.Body>
                  </Card>
                </Col>
      

       
        
          <Col>
          <Card>
          <Card.Body>
            <Card.Title>
              Reviews
            </Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>Review1</ListGroup.Item>
              <ListGroup.Item>Review2</ListGroup.Item>
              <ListGroup.Item>Review3</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      </Card>
      </Col>
      </Row>
    </Container>
  </>
  )
}

// try {
//   setError("")
//   setLoading(true)
//   const userDetails = {
//       firstName: firstNameRef.current.value,
//       lastName: lastNameRef.current.value,
//       userTown: userTownRef.current.value,
//       locationOfPlaceOfWork: locationOfPlaceOfWorkRef.current.value,
//       // jobType: selectJob.current.value,
//       uid: currentUser.uid,
//       userEmail: currentUser.email
//   }
//   console.log(userDetails)
//   await postUser(userDetails)
//   navigate("/")
// } catch {
//   setError("failed to post user details")
// }
// setLoading(false)
// }

// // const handleClick = (e) => {
// //     const chosenJob = e.target.value
// //     setSelectJob(chosenJob) 

// // }

// return (
// <div>
//   <Container className="mt-3 d-flex align-items-center justify-content-center">
//       <Card>
//           <Card.Body>
//               <h2>Please enter your details below</h2>
//               {error && <Alert variant="danger">{error}</Alert>}
//               <Form onSubmit={handleSubmit}>
//                   <Form.Group id="firstName">
//                       <Form.Label>First name </Form.Label>
//                       <Form.Control type="firstName" ref={firstNameRef} required ></Form.Control>
//                   </Form.Group>

//                   <Form.Group id="lastName">
//                       <Form.Label>Last name </Form.Label>
//                       <Form.Control type="lastName" ref={lastNameRef} required ></Form.Control>
//                   </Form.Group>
//                   <Form.Group id="userTown">
//                       <Form.Label>What town/city do you live in? </Form.Label>
//                       <Form.Control type="userTown" ref={userTownRef} ></Form.Control>
//                   </Form.Group>
//                   <Form.Group id="placeOfWork">
//                       <Form.Label>What town/city do you work in? </Form.Label>
//                       <Form.Control type="placeOfWork" ref={locationOfPlaceOfWorkRef} ></Form.Control>
//                   </Form.Group>
//                   {/* <Form.Label>What job did you do in your last role? (choose closest)</Form.Label>
//                   <Form.Select onChange={handleClick} value={selectJob} placeholder="Choose an option..">
//                       <option value="Server">Server</option>
//                       <option value="Cook">Cook</option>
//                       <option value="Busser">Busser</option>
//                       <option value="Bartender">Bartender</option>
//                       <option value="Dishwasher">Dishwasher</option>
//                   </Form.Select> */}
//                   <Button disabled={loading} className="w-100 mt-2" type="submit">Sign Up</Button>
//               </Form>
//           </Card.Body>
//       </Card>
//   </Container>
// </div>
// )
// }

// export default SignUpForm
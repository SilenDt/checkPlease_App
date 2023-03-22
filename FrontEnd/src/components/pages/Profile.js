import React, { useState } from 'react'
import { Container, Card, Col, Row, ListGroup, Button, Accordion } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'
import '../css/style.css'
import { deleteOneReview } from '../../services/ReviewService'

export default function Profile({ userDetailsByUid, reviews, hideReviews, handleDeleteReveiw }) {

  const { currentUser, setCurrentUser } = useAuth()

  const currentUserReviews = reviews.filter((review) => userDetailsByUid.id == review.user.id)

  const handleDelete = (e) => {
    handleDeleteReveiw(e.target.value)
    deleteOneReview(e.target.value)
  }

  const mappedReviews = currentUserReviews.map((review) => (
    <Container key={review.id}>
      <Card>
        <Row>
          <Col>
            <Card.Text className="fw-bold">Date Posted:
            </Card.Text>
            {review.date}
          </Col>
          <Col>
            <Accordion defaultactiveaey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Review</Accordion.Header>
                <Accordion.Body>
                  <Card.Text className="fw-bold">Company Name: </Card.Text>
                  <Card.Text>{review.company.name}</Card.Text>

                  <Card.Text className="fw-bold">Job role: </Card.Text>
                  <Card.Text>{review.jobType.jobRole}</Card.Text>
                  <Card.Text className="fw-bold">Do you tip out?: </Card.Text>
                  <Card.Text>{review.doYouTipOut}</Card.Text>
                  <Card.Text className="fw-bold">Tip out method: </Card.Text>
                  <Card.Text>{review.tipOutType.tipOutMethod}</Card.Text>
                  <Card.Text className="fw-bold">Hourly rate: </Card.Text>
                  <Card.Text>${review.hourlyRate}</Card.Text>
                  <Card.Text className="fw-bold">Pros: </Card.Text>
                  <Card.Text>{review.pros}</Card.Text>
                  <Card.Text className="fw-bold">Cons: </Card.Text>
                  <Card.Text>{review.cons}</Card.Text>
                  <Card.Text className="fw-bold">Additional Comments: </Card.Text>
                  <Card.Text>{review.additionalComments}</Card.Text>
                  <Button onClick={handleDelete} value={review.id} className=" w-30 mt-1 ">
                    Delete review
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            {/* <Button onClick={handleDelete} value= {review.id} className=" w-30 mt-1 ">
                                    Delete review                               
                                    </Button> */}
          </Col>
        </Row>
      </Card>
    </Container>
  ));
  
    return (    
        <Container>
            <Row>
                <Col>
                <Card className='profile-container' style={{ width: '100%' }}>
                        <Card.Header><h2 className="text-center mb-4">Profile</h2></Card.Header>
                        <Card.Body style={{maxWidth: '18rem'}}>
                            <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWa7dpWBjhQVy7rFc2ETvnSJ1iMuZXyEAgw&usqp=CAU"/>
                        </Card.Body>
                        <Card style={{borderRadius: "0px"}}>
                            <Card.Body>
                                <Card.Title><h2>{userDetailsByUid.firstName}  {userDetailsByUid.lastName}</h2></Card.Title>
                            </Card.Body>
                        </Card>
                            <Card.Body>
                                    <Card.Title className="mb-0">Email</Card.Title>
                                    <Card.Text>{currentUser.email}</Card.Text>
                            </Card.Body>
                        <Card.Body>
                            <Card.Title className="mb-0">Current City:</Card.Title> 
                            <Card.Text>{userDetailsByUid.userTown}</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title className="mb-0">Town you work in:</Card.Title>
                            <Card.Text>{userDetailsByUid.locationOfPlaceOfWork}</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title className="mb-0">Your current job title:</Card.Title>
                            <Card.Text>{userDetailsByUid.jobType.jobRole}</Card.Text> 
                        </Card.Body>  
                        <Link to="/update-profile/:id" className="btn btn-primary w-100 mt-3">
                        Update profile
                        </Link>
                        {/* </Card.Body> */}
                    </Card>
                </Col>   
                {hideReviews ? "" :   
                <Col sm={8}>
                    <Card>
                    <Card.Header><h2 className="text-center mb-4">Your reviews</h2></Card.Header>
                    <Card.Body>
                        <ListGroup variant="flush">
                        <ListGroup.Item>{mappedReviews}</ListGroup.Item>
                        {/* <Link to="/update-review/:id" className="btn btn-primary w-30 mt-1 mr-3">  
                                    Update review
                                </Link> */}

                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        }
      </Row>
    </Container>
  )
}

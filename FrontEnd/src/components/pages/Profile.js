import React, { useState } from 'react'
import { Container, Card, Col, Row, ListGroup } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext'
import { Link } from 'react-router-dom'


export default function Profile({ userDetailsByUid, reviews, hideReviews }) {

  const { currentUser, setCurrentUser } = useAuth()


  const currentUserReviews = reviews.filter((review) => userDetailsByUid.id == review.user.id)

  const mappedReviews = currentUserReviews.map((review) => (
    <Container key={review.id}>
      <Row>
        <Col>Date Posted: {review.date}</Col>
        <Col>Review:
          {review.company.name}
          {review.jobType.jobRole}
          {review.doYouTipOut}
          {review.tipOutType.tipOutMethod}
          {review.hourlyRate}
          {review.pros}
          {review.cons}
          {review.additionalComments}
        </Col>
      </Row>
    </Container>
  ));

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card.Body>

              <Card.Header><h2 className="text-center mb-4">Profile</h2></Card.Header>
              <Row>
                <Col>
                  <Card style={{ maxWidth: '18rem' }}>
                    <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWa7dpWBjhQVy7rFc2ETvnSJ1iMuZXyEAgw&usqp=CAU" />
                    <Card>
                      <Card.Title><h2>{userDetailsByUid.firstName}  {userDetailsByUid.lastName}</h2></Card.Title>
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
                    </Card>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
            <Card.Body>
              <Col>
                {hideReviews ? "" :

                  <Card>
                    <Card.Body>
                      <Card.Title>
                        Reviews
                      </Card.Title>
                      <ListGroup variant="flush">
                        <ListGroup.Item>{mappedReviews}</ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>
                }
              </Col>

            </Card.Body>
          </Col>
        </Row>
      </Container>
    </>
  )
}

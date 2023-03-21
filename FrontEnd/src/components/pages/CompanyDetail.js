import { useNavigate, useParams } from "react-router"
import { useState, useEffect } from "react";
import { getOneCompany } from "../../services/CompanyServices";
import { Tab, Tabs, Image, Button, Card, Col, Row, Container } from "react-bootstrap";
import ReactStars from "react-stars";



const CompanyDetail = ({ companiesInfo, reviews, jobTypes }) => {

    const { id } = useParams()
    const navigate = useNavigate()


    const oneCompany = companiesInfo.find((company) => company.id == id);

    // filter through reviews to display the ones that match current company id.
    const currentCompanyReviews = reviews.filter((review) => review.company.id == id)

    const mappedReviews = currentCompanyReviews.map((review) => (
        <Container key={review.id}>
            <Row>
                <Col>Username: {review.user.firstName}</Col>
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


    const currentJobTypes = jobTypes.map((jobType) => (
        <Container key={jobType.id}>
            <Row>
                <Col>Job Role: {jobType.jobRole}</Col>
                <Col>Hourly Rate: ${jobType.hourlyRate}</Col>
            </Row>
        </Container>
    ));
    console.log(jobTypes)


    const handleWriteReviewClick = () => {
        navigate("/review-form")
    }

    const handleCompareClick = () => {
        navigate(`/companies/${id}/company-comparison`)
    }

    
    const averageRating = currentCompanyReviews.reduce((sum, review) => sum + review.overallRating, 0) / currentCompanyReviews.length
    


    return (
        <>
            <Image 
                        variant="top" 
                        src={oneCompany.imageUrl} 
                        alt="this is a company picture"
                        style={{ maxWidth: "250px", maxHeight: "250px", minWidth:"50px", minHeight:"50px", float: "left", margin: "0.25rem", borderRadius: "15px" }}
                        className="img-fluid"
                        />
            
            {/* <Image
                src="https://picsum.photos/900/400"
                fluid
            /> */}
            <Tabs
                // defaultActiveKey="Overview"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="overview" title="Overview" defaultActiveKey="Overview">
                    <Container>
                        <Row>

                            <Col>
                                
                                {oneCompany.name} <br></br>
                                {oneCompany.town} <br></br>
                                {oneCompany.description} <br></br>
                                Website: <br></br>
                                Email:
                            </Col>

                            <Col> Overall Rating:
                                <Card>
                                    <ReactStars
                                    count={5}
                                    value={averageRating}
                                    name="rating"
                                    size={24}
                                    position="center"
                                    activeColor="#ffd700"
                                    edit ={false}
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                    {mappedReviews}
                </Tab>
                <Tab eventKey="wages" title="Wages">
                    {currentJobTypes}
                </Tab>
            </Tabs>
            <Button onClick={handleWriteReviewClick}>Write a Review</Button>
            <Button onClick={handleCompareClick}>Compare</Button>
        </>
    );
}

export default CompanyDetail;

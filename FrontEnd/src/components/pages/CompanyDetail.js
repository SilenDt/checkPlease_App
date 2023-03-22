import { useLocation, useNavigate, useParams } from "react-router"
import { Tab, Tabs, Image, Button, Card, Col, Row, Container } from "react-bootstrap";
import ReactStars from "react-stars";
import { getReviewByCompanyId } from "../../services/ReviewService";



const CompanyDetail = ({ companiesInfo, reviews, jobTypes }) => {

    const { id } = useParams()
    const navigate = useNavigate()





    const oneCompany = companiesInfo.find((company) => company.id == id);

    // filter through reviews to display the ones that match current company id.
    const currentCompanyReviews = reviews.filter((review) => review.company.id == id)
    

    const jobPayObj = {}
    currentCompanyReviews.forEach(review => {
        const name = review.jobType.jobRole 
        const rate = review.hourlyRate

        if(jobPayObj[name]){
            jobPayObj[name].push(rate)
        } else {
            jobPayObj[name] = [rate]
        }
    });
    console.log(jobPayObj)

    const jobPayArray = []
    for (let jobTitleKey in jobPayObj ){
        const total = jobPayObj[jobTitleKey].reduce((prevNumb, currentNumb ) =>  prevNumb + currentNumb)
        const avg = total / jobPayObj[jobTitleKey].length
        const jobAvgPayObj = {jobTitle : jobTitleKey, avgPay : avg}
        jobPayArray.push(jobAvgPayObj)
    }
    console.log(jobPayArray)

    const jobTitlesAndAvgRate = jobPayArray.map((jobAvgPayObj) => (
        <Row>
            <Col>{jobAvgPayObj.jobTitle}</Col>
            <Col>{jobAvgPayObj.avgPay}</Col>
        </Row>
    ))
    


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

    const handleWriteReviewClick = () => {
        navigate("/review-form", {state: {companyName: oneCompany.name}})
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
            <Tabs
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="overview" title="Overview" defaultactivekey="Overview">
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
                                    ({currentCompanyReviews.length})
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                    {mappedReviews}
                </Tab>
                <Tab eventKey="wages" title="Wages">
                    <Row>
                        <Col>
                        <h6 className="font-weight-bold text-uppercase mb-3">Job title</h6>
                        </Col>
                        <Col>
                        <h6 className="font-weight-bold text-uppercase mb-3">
                        Average hourly rate</h6>
                        </Col>
                    </Row>
                    {/* {currentJobTypes} */}
                    {jobTitlesAndAvgRate}
                </Tab>
            </Tabs>
            <Button className="m-2" onClick={handleWriteReviewClick}>Write a Review</Button>
            <Button onClick={handleCompareClick}>Compare</Button>
        </>
    );
}

export default CompanyDetail;

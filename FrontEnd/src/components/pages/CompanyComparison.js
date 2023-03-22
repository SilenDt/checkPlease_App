import { useParams } from "react-router";
import { useState } from "react";
import { Card, Form, FloatingLabel, Image, Row, Col, Container } from "react-bootstrap";
import SearchDropdown from "../dashboard/SearchDropdown";

const CompanyComparison = ({ resetSearchResults, companiesInfo, jobTypes, saveSearchDetail, searchResults, reviews }) => {

    const { id } = useParams()

    const [searchbarInput, setSearchbarInput] = useState("")
    const [showComparison, setShowComparison] = useState(false)
    const [twoCompany, setTwoCompany] = useState()
    const [error, setError] = useState("")

    const handleChange = (e) => {
        const searchInput = e.target.value
        console.log({ searchInput })
        setSearchbarInput(searchInput)
        saveSearchDetail(searchInput)
        setError("")
        console.log(saveSearchDetail)
    }


    const onSelect = (companyId) => {
        if(companyId === id){
            setError("You cannot compare a company against itself!")
            return;
        }
            setSearchbarInput("")
            setShowComparison(true)
            resetSearchResults()
            const twoCompany = companiesInfo.find((company) => company.id == companyId)
            setTwoCompany(twoCompany)
    }

    const oneCompany = companiesInfo.find((company) => company.id == id);
    
    const oneCompanyReviews = reviews.filter((review) => review.company.id == id)

    //const curentSearchResults = searchResults.map((result) => (
    //    result.name
    //));
    const jobPayObj1 = {}
    oneCompanyReviews.forEach(review => {
        const name = review.jobType.jobRole 
        const rate = review.hourlyRate

        if(jobPayObj1[name]){
            jobPayObj1[name].push(rate)
        } else {
            jobPayObj1[name] = [rate]
        }
    });

    const jobPayArray1 = []
    for (let jobTitleKey in jobPayObj1 ){
        const total = jobPayObj1[jobTitleKey].reduce((prevNumb, currentNumb ) =>  prevNumb + currentNumb)
        const avg = total / jobPayObj1[jobTitleKey].length
        const jobAvgPayObj1 = {jobTitle : jobTitleKey, avgPay : avg}
        jobPayArray1.push(jobAvgPayObj1)
    }

    const jobTitlesAndAvgRate1 = jobPayArray1.map((jobAvgPayObj1) => (
        <Row key={jobAvgPayObj1.jobTitle}>
            <Col>{jobAvgPayObj1.jobTitle}</Col>
            <Col>${jobAvgPayObj1.avgPay}</Col>
        </Row>
    ))


   const currentJobTypes = jobTypes.map((jobType) => (
       <Container key={jobType.id}>
           <Row>
               <Col>{jobType.jobRole}</Col>
               <Col> $ {jobType.hourlyRate}</Col>
           </Row>
       </Container>
   ));

    function displayComparisonJobTypes() {
            return (
            <Card>
                <Card.Body>
                    <Image style={{maxWidth: "25em", maxHeight: "25em"}}
                        src={twoCompany.imageUrl}
                        fluid
                    />
                    <Card.Title>
                        {twoCompany.name}
                    </Card.Title>
                    <Card.Text>
                        {twoCompany.description}
                    </Card.Text>
                </Card.Body>
                <Card.Body >
                <Row>
                    <Col>
                    <h6 className="font-weight-bold text-uppercase mb-3">Job title</h6>
                    </Col>
                    <Col>
                    <h6 className="font-weight-bold text-uppercase mb-3">
                    Average hourly rate</h6>
                    </Col>
                    </Row>
                    {currentJobTypes}
                </Card.Body>
            </Card>
            )
    }


    return (
        <>
        <h2 className="text-center">Compare companies</h2>
        <Row>
        <Form.Group className="mb-3 mt-3" style={{ width: "75%" }} controlId="form-input-choice">
            <FloatingLabel controlId="floatingInputGrid" label="Search using restaurant name or location">
                <Form.Control type="search" placeholder="Search here..." value={searchbarInput} onChange={handleChange} />
            </FloatingLabel>
                        <SearchDropdown 
                        searchResults={searchResults} 
                        displayComparisonJobTypes={displayComparisonJobTypes} 
                        onSelect={onSelect}
                        />
                        {error && <p>{error}</p>}
        </Form.Group>
        </Row>
            <Container className="mt-3">
                <Row>
                    <Col>
                        <Card.Body>
                            <Card>
                                <Image style={{maxWidth: "25em", maxHeight: "25em"}}
                                    src={oneCompany.imageUrl}
                                    fluid
                                />
                                <Card.Title>
                                    {oneCompany.name}
                                </Card.Title>
                                <Card.Text>
                                    {oneCompany.description}
                                </Card.Text>
                            </Card>
                            <Card>
                                <Row>
                                    <Col>
                                    <h6 className="font-weight-bold text-uppercase mb-3">Job title</h6>
                                    </Col>
                                    <Col>
                                    <h6 className="font-weight-bold text-uppercase mb-3">
                                    Average hourly rate</h6>
                                    </Col>
                                </Row>
                                {jobTitlesAndAvgRate1}
                            </Card>
                        </Card.Body>
                    </Col>
                    <Col>
                    {!showComparison ?
                        <p>Search a comparison company and it'll display here!</p>
                    : null}
                    {showComparison ? displayComparisonJobTypes() : null}
                    </Col>
                </Row>

            </Container>

        </>
    )

}

export default CompanyComparison

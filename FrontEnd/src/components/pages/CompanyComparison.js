import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import { Card, Form, FloatingLabel, Image, Row, Col, Container } from "react-bootstrap";
import SearchDropdown from "../dashboard/SearchDropdown";

const CompanyComparison = ({ resetSearchResults, companiesInfo, jobTypes, saveSearchDetail, searchResults }) => {

    const { id } = useParams()

    const [searchbarInput, setSearchbarInput] = useState("")
    const [showComparison, setShowComparison] = useState(false)

    // let shouldNavigate = false;
    //searchInput are the letters the user types
    //searchResults empty array atm
    //saveSearchDetail checks if the searchInput matches any companies from the db

    const handleChange = (e) => {
        const searchInput = e.target.value
        console.log({ searchInput })
        setSearchbarInput(searchInput)
        saveSearchDetail(searchInput)
        console.log(saveSearchDetail)

        //add a condition for the company you're on to not be displayed as comparison
    }


    const onSelect = (companyId) => {
            setSearchbarInput("")
            setShowComparison(true)
            resetSearchResults()
        //when the user has selected the company and clicked the button
        //display the comparisonJobTypes()
    }



    const oneCompany = companiesInfo.find((company) => company.id == id);

    const curentSearchResults = searchResults.map((result) => (
        result.name
    ));
    console.log(curentSearchResults)


    const currentJobTypes = jobTypes.map((jobType) => (
        <Container key={jobType.id}>
            <Row>
                <Col>{jobType.jobRole}</Col>
                <Col> $ {jobType.hourlyRate}</Col>
            </Row>
        </Container>
    ));

    function displayComparisonJobTypes() {
            return jobTypes.map((jobType) => (
                <Container key={jobType.id}>
                    <Row>
                        <Col>{jobType.jobRole}</Col>
                        <Col> {jobType.hourlyRate}</Col>
                    </Row>
                </Container>
            ))
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
                        // showComparison = {showComparison}
                        // shouldNavigate = {shouldNavigate}
                        displayComparisonJobTypes={displayComparisonJobTypes} 
                        onSelect={onSelect}
                        />
        </Form.Group>
        </Row>
            <Container className="mt-3">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
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
                            </Card.Body>
                            <Card.Body >
                                <Card.Title>Job Role (wages):</Card.Title>
                                <Card.Text>{currentJobTypes}</Card.Text>
                            </Card.Body>
                        </Card>
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

import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import { Card, Form, FloatingLabel, Image, Row, Col, Container } from "react-bootstrap";
import SearchDropdown from "../dashboard/SearchDropdown";

const CompanyComparison = ({ companiesInfo, jobTypes, saveSearchDetail, searchResults }) => {

    const { id } = useParams()
    let shouldNavigate = false

    const [searchbarInput, setSearchbarInput] = useState("")
    const [showComparision, setShowComparision] = useState(false)


    //searchInput are the letters the user types
    //searchResults empty array atm
    //saveSearchDetail checks if the searchInput matches any companies from the db

    const handleChange = (e) => {
        const searchInput = e.target.value
        console.log({ searchInput })
        setSearchbarInput(searchInput)
        saveSearchDetail(searchInput)
        console.log(saveSearchDetail)
    }


    const onSelect = (companyId) => {
            setShowComparision(true)
        
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
                <Col> {jobType.hourlyRate}</Col>
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



    // console.log(displayComparisonJobTypes())





    return (
        <>
            <Image
                src="https://picsum.photos/900/400"
                fluid
            />
            <Container className="mt-3">
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    {oneCompany.name}
                                </Card.Title>
                                <Card.Text>
                                    {oneCompany.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                    {/* <Card.Body> */}
                        Comparison Company
                        <Form.Group className="mb-3 mt-3" style={{ width: "100%" }} controlId="form-input-choice">
                            <FloatingLabel controlId="floatingInputGrid" label="Search using restaurant name or location">
                                <Form.Control type="search" placeholder="Search here..." value={searchbarInput} onChange={handleChange} />
                            </FloatingLabel>

                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>Job Role (wages):</Card.Title>
                                <Card.Text>{currentJobTypes}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    {searchResults ?
                        <Col ><SearchDropdown 
                        searchResults={searchResults} 
                        shouldNavigate = {shouldNavigate}
                        displayComparisonJobTypes={displayComparisonJobTypes} 
                        onSelect={onSelect}

                        />
                            {showComparision ? displayComparisonJobTypes() : null}
                        </Col> : null}
                </Row>



            </Container>

        </>
    )

}

export default CompanyComparison

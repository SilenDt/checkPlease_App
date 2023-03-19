import { useParams, useNavigate } from "react-router";
import { Card, Body, Title, Image, Row, Col, Container } from "react-bootstrap";

const CompanyComparison = ({ companiesInfo, jobTypes }) => {

    const { id } = useParams()
    const navigate = useNavigate()

    console.log(id)

    console.log(companiesInfo)

    const oneCompany = companiesInfo.find((company) => company.id == id);
    console.log(jobTypes)
    console.log(oneCompany)


    const currentJobTypes = jobTypes.map((jobType) => (
        <Container key={jobType.id}>
            <Row>
                <Col>{jobType.jobRole}</Col>
                <Col> {jobType.hourlyRate}</Col>
            </Row>
        </Container>
    ));

        console.log(currentJobTypes)

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
                        Comparison Company 
                    </Col>
                </Row>
                <Row>
                    <Col> 
                        <Card>
                            <Card.Body>
                                <Card.Title>Job Role:</Card.Title>
                                <Card.Text>{currentJobTypes}</Card.Text>
                                <Card.Title>Wages:</Card.Title>
                                <Card.Text>{currentJobTypes}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>2 of 2</Col>
                </Row>



            </Container>

        </>
    )

}

export default CompanyComparison

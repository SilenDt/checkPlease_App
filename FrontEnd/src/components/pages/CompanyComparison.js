import { useParams, useNavigate } from "react-router";
import { Card, Body, Title, Image } from "react-bootstrap";

const CompanyComparison = ({ companiesInfo, jobTypes }) => {

    const { id } = useParams()
    const navigate = useNavigate()

    console.log(id)

    console.log(companiesInfo)

    const oneCompany = companiesInfo.find((company) => company.id == id);
    console.log(jobTypes)
    console.log(oneCompany)
    
    // const currentJobTypes = jobTypes.forEach((jobType) => {
    //     // console.log(jobType)
    //     return jobType
    // })


    return (
        <>
            <Image
                src="https://picsum.photos/900/400"
                fluid
            />
            <Card className="mt-3 d-flex align-items-center justify-content-center">
            <Card.Body>
                <Card.Title>{oneCompany.name}</Card.Title>
                <Card.Text>{oneCompany.description}</Card.Text>
            </Card.Body>
                <Card.Body>
                    {/* <Card.Title>Job Role:</Card.Title>
                    <Card.Text>{currentJobTypes.jobRole}</Card.Text> */}
                    {/* <Card.Title>Wages:</Card.Title>
                    <Card.Text>{currentJobTypes.hourlyRate}</Card.Text> */}
                </Card.Body>
            </Card>
        </>
    )

}

export default CompanyComparison

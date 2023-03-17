import { Link } from "react-router-dom"
import {Image, Card, Button} from "react-bootstrap"

const CompanyItem = ({company, onCompanyClicked}) => {

    const handleClick = () => {
    onCompanyClicked(company.id)
    }

    https://1000logos.net/wp-content/uploads/2020/09/TGI-Fridays-Logo-2004.jpg
        return(
        <div>
            <div style={{ padding: "0.25rem", marginBottom: "0.5rem" }}>
            <div onClick={handleClick}>
                    <Card style={{borderRadius: "15px"}} >
                        <div style={{ display: "flex", alignItems: "flex-start"}}>
                        <Card.Img 
                        variant="top" 
                        src={company.imageUrl} 
                        alt="this is a company picture"
                        style={{ maxWidth: "250px", maxHeight: "250px", minWidth:"50px", minHeight:"50px", float: "left", margin: "0.25rem", borderRadius: "15px" }}
                        className="img-fluid"
                        />
                        <Card.Body>
                                <Card.Title>{company.name}</Card.Title>
                                <Card.Subtitle>{company.town}</Card.Subtitle>
                                <Card.Text>{company.description}</Card.Text>
                                <Card.Text>Rating: {company.rating}</Card.Text>
                                <Card.Link href={`/companies/${company.id}`}>Click here for more information...</Card.Link>
                        </Card.Body>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default CompanyItem
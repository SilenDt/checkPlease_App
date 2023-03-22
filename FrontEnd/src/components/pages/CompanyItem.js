import {Card} from "react-bootstrap"
import ReactStars from "react-stars"

const CompanyItem = ({company, onCompanyClicked, reviews, shuffledCompanies}) => {

    const currentCompanyReviews = reviews.filter((review) => review.company.id == company.id)

    const averageRating = currentCompanyReviews.reduce((sum, review) => sum + review.overallRating, 0) / currentCompanyReviews.length


    const handleClick = () => {
        window.location.href = `/companies/${company.id}`
        shuffledCompanies()
        onCompanyClicked(company.id)
    }

        return(
        <div>
            <div style={{ padding: "0.25rem", marginBottom: "0.5rem" }}>
            <div onClick={handleClick}>
                    <Card style={{borderRadius: "15px"}} >
                        <div style={{ display: "flex", alignItems: "flex-start"}}>
                        <a href={`/companies/${company.id}`}>
                        <Card.Img 
                        variant="top" 
                        src={company.imageUrl} 
                        alt="this is a company picture"
                        style={{ maxWidth: "250px", maxHeight: "250px", minWidth:"50px", minHeight:"50px", float: "left", margin: "0.25rem", borderRadius: "15px" }}
                        className="img-fluid"
                        
                        /></a>
                        <Card.Body>
                                <Card.Title>{company.name}</Card.Title>
                                <Card.Subtitle>{company.town}</Card.Subtitle>
                                <Card.Text>{company.description}</Card.Text>
                                <Card.Title>Rating: <ReactStars
                                    count={5}
                                    value={averageRating}
                                    name="rating"
                                    size={24}
                                    position="center"
                                    activeColor="#ffd700"
                                    edit ={false}
                                    />
                                    ({currentCompanyReviews.length})
                                    </Card.Title>
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
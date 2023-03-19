import { useNavigate, useParams } from "react-router"
import { useState, useEffect } from "react";
import { getOneCompany } from "../../services/CompanyServices";
import { Tab, Tabs, Image, Button, Card } from "react-bootstrap";


const CompanyDetail = ({ companiesInfo, reviews, selectedCompany, onReviewButtonClicked }) => {

    const { id } = useParams()
    const navigate = useNavigate()

    const oneCompany = companiesInfo.find((company) => company.id == id);
    // console.log(reviews)

    // filter through reviews to display the ones that match current company id.
    const currentCompanyReviews = reviews.filter((review) => review.company.id == id)
    // console.log(currentCompanyReviews[0].text)
    // console.log(currentCompanyReviews.text)

    const handleWriteReviewClick = () => {
        navigate("/review-form")
    } 


    return (
        <>
            <Image
                src="https://picsum.photos/900/400"
                fluid
            />
            <Tabs
                defaultActiveKey="Overview"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="overview" title="Overview" >
                    {oneCompany.name} <br></br>
                    {oneCompany.town} <br></br>
                    {oneCompany.rating} <br></br>
                    {oneCompany.description} <br></br>
                    Website: <br></br>
                    Email:
                </Tab>
                <Tab eventKey="reviews" title="Reviews">
                    {currentCompanyReviews[0].user.name} <br></br>
                    {currentCompanyReviews[0].date} <br></br>
                    {currentCompanyReviews[0].text} <br></br>
                </Tab>
                <Tab eventKey="wages" title="Wages">
                    dollllaaaaassssss $$$$
                </Tab>
            </Tabs>
            <Button onClick={handleWriteReviewClick}>Write a Review</Button>
        </>
    );
}

export default CompanyDetail;

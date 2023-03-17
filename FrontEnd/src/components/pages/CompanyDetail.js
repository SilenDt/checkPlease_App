import { useParams } from "react-router"
import { useState, useEffect } from "react";
import { getOneCompany } from "../../services/CompanyServices";
import { Tab, Tabs, Image, Button, Card } from "react-bootstrap";

const CompanyDetail = ({ companiesInfo, selectedCompany, onReviewButtonClicked }) => {
    const { id } = useParams()

    const oneCompany = companiesInfo.find((company) => company.id == id);
    console.log({ oneCompany })

    const handleReviewClick = () => {
        onReviewButtonClicked(reviews.form)
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
                    blaaaaaaaaaaa
                </Tab>
                <Tab eventKey="wages" title="Wages">
                    dollllaaaaassssss $$$$
                </Tab>
                
                </Tabs>
                {/* <Card> */}
                    {/* <Card.Header>Write a Review</Card.Header> */}
                    <Button onClick={handleReviewClick}>Write a Review</Button>
                {/* </Card> */}
                
                </>

    );
}

export default CompanyDetail;

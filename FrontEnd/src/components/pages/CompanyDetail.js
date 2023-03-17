import { useNavigate, useParams } from "react-router"
import { useState, useEffect } from "react";
import { getOneCompany } from "../../services/CompanyServices";
import { Tab, Tabs, Image, Button, Card } from "react-bootstrap";


const CompanyDetail = ({ companiesInfo, reviews, selectedCompany, onReviewButtonClicked }) => {

    const { id } = useParams()
    const navigate = useNavigate()

    const oneCompany = companiesInfo.find((company) => company.id == id);
    // console.log({ oneCompany })
    console.log(reviews)

    //filter through reviews to display the ones that match current company id.
    const currentCompanyReviews = reviews.filter((review) => review.company.id == id)
    console.log(currentCompanyReviews[0].text)

    const handleWriteReviewClick = () => {
        navigate("/review-form")
    } 

    

    // async function handleSubmit(e) {
    //     e.preventDefault()
    //     try {
    //         setError("")
    //         setLoading(true)
    //         await SignIn(emailRef.current.value,passwordRef.current.value)
    //         navigate("/")

    //     } catch {
    //         setError("You do not have an account with us")

    //     }
    //     setLoading(false)
    // }

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
//onClick={handleReviewClick}

export default CompanyDetail;

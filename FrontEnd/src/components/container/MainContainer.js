import SignUp from "../auth/SignUp";
import SignIn from "../auth/SignIn";
import NavBar from "../layout/NavBar";
import Dashboard from "../dashboard/Dashboard";
import Profile from "../pages/Profile";
import ProtectedRoute from "../security/ProtectedRoute"
import SignUpForm from "../auth/SignUpForm";
import ForgotPassword from "../auth/ForgotPassword";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Container, Row, Column } from "react-bootstrap"
import { useState, useEffect } from "react";
import { getAllReviews, getCompaniesInfo } from "../../services/CompanyServices";
import CompanyDetail from "../pages/CompanyDetail";
import { getOneCompany } from "../../services/CompanyServices";
import { useParams } from "react-router-dom";


const MainContainer = () => {

  const [companiesInfo, setCompaniesInfo] = useState([])
  const [reviews, setReviews] = useState([])
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [searchResults, setSearchResults] = useState([])


  useEffect(() => {
    getCompaniesInfo()
      .then((allCompaniesInfo) => {
        setCompaniesInfo(allCompaniesInfo)

      })
  }, [])

  useEffect(() => {
    getAllReviews()
      .then((allReviews) => {
        setReviews(allReviews)
      })
  }, [])



  const onCompanyClicked = (company) => {
    setSelectedCompany(company)
  }

  const saveSearchDetail = (userSearchInput) => {
    if (userSearchInput) {
      setSearchResults(companiesInfo.filter(company => company.name.toLowerCase().includes(userSearchInput.toLowerCase()) || company.town.toLowerCase().includes(userSearchInput.toLowerCase())))
    } else {
      setSearchResults([])
    }
  }



  // const onVisitedClick = (clickedCountry) => {
  //   if (visitedList.filter(country => country.cca2 === clickedCountry.cca2).length === 0) {
  //       postVisitedCountry(clickedCountry)
  //           .then((response) => {
  //               const copyOfClickedCountry = { ...clickedCountry }
  //               copyOfClickedCountry._id = response.insertedId
  //               addToVisited(copyOfClickedCountry)
  //               deleteBucketCountry(clickedCountry.cca2)
  //                   .then(() => {
  //                       removeBucketCountry(clickedCountry.cca2)
  //                       setCountryAddMessage('Added to list!')


  // const onReviewButtonClicked =(reviewForm) => {
  //   setSelectedReview(review)
  // }




  return (
    <Router>
      <NavBar />
      <Container>
        {/* className="d-flex align-items-center justify-content-center" 
              style={{minHeight:"60vh"}}   */}
        <Routes>
          <Route exact path="/" element={<ProtectedRoute><Dashboard

            saveSearchDetail={saveSearchDetail}
            searchResults={searchResults}
            companiesInfo={companiesInfo}
            onCompanyClicked={onCompanyClicked}

          />
          </ProtectedRoute>} />
          {companiesInfo.length > 0 ?
            <Route path="/companies/:id"
              element=
              {<CompanyDetail
                selectedCompany={selectedCompany}
                companiesInfo={companiesInfo}
                reviews={reviews}
              // onReviewButtonClicked={onReviewButtonClicked}
              />}
            /> : "loading"}
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/signupform" element={<ProtectedRoute><SignUpForm /></ProtectedRoute>}></Route>
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
        </Routes>
      </Container>
    </Router>
  )
}

export default MainContainer
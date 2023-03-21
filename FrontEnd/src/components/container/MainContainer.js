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
import { getCompaniesInfo } from "../../services/CompanyServices";
import CompanyDetail from "../pages/CompanyDetail";
import { getOneCompany } from "../../services/CompanyServices";
import { useParams } from "react-router-dom";
import ReviewForm from "../pages/ReviewForm";
import { useAuth } from "../../contexts/AuthContext"
import { getAllReviews } from "../../services/ReviewService";
import { getUserByUid, postUser } from "../../services/UserServices";
import { returnStatement } from "@babel/types";
import { getJobTypesInfo } from "../../services/JobTypeServices";
import CompanyComparison from "../pages/CompanyComparison";
import UpdateProfile from "../pages/UpdateProfile";
import { getTipOutTypes } from "../../services/TipOutTypeServices";

const MainContainer = () => {

  const [companiesInfo, setCompaniesInfo] = useState([])
  const [reviews, setReviews] = useState([])
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [searchResults, setSearchResults] = useState([])
  const [userDetailsByUid, setUserDetailsByUid] = useState(null)
  const [jobTypes, setJobTypes] = useState([])
  const { currentUser, setCurrentUser } = useAuth()
  const [tipOutTypes, setTipOutTypes] = useState([])
  let shouldNavigate = false

  // console.log("This is the current user " + currentUser.uid)

  useEffect(() => {
    getCompaniesInfo()
      .then((allCompaniesInfo) => {
        setCompaniesInfo(allCompaniesInfo)
      })
    getAllReviews()
      .then((allReviews) => {
        setReviews(allReviews)
        console.log(allReviews)
      })
    getTipOutTypes()
    .then((allTipOutTypes) => {
      setTipOutTypes(allTipOutTypes)
    })

    getJobTypesInfo()
      .then((allJobTypes) => {
        setJobTypes(allJobTypes)
        // console.log(allJobTypes)
      })
      
    if (!currentUser) {
      return
    }
    getUserByUid(currentUser.uid)
      .then((userDetailsByUid) => {
        setUserDetailsByUid(userDetailsByUid)
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

  const resetSearchResults = () => {
    setSearchResults([])
  }

  console.log(userDetailsByUid)



  return (
    <Router>
      <NavBar />
      <Container>
        <Routes>
          <Route exact path="/" element={<Dashboard
            saveSearchDetail={saveSearchDetail}
            searchResults={searchResults}
            companiesInfo={companiesInfo}
            onCompanyClicked={onCompanyClicked}
            userDetailsByUid={userDetailsByUid}
            selectedCompany={selectedCompany}
            jobTypes={jobTypes}
            tipOutTypes={tipOutTypes}
            reviews={reviews}
            resetSearchResults={resetSearchResults}
          />  
          }/>
          
          {companiesInfo.length > 0 && reviews.length > 0 && jobTypes.length > 0 ?
            <Route path="/companies/:id"
              element=
              {<CompanyDetail
                companiesInfo={companiesInfo}
                reviews={reviews}
                jobTypes={jobTypes}
              />}
            /> : "loading"}
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/signup" element={<SignUp/>}></Route>
          <Route path="/signupform" element={<ProtectedRoute><SignUpForm jobTypes={jobTypes}/></ProtectedRoute>}></Route>
          {/* <Route path={currentUser && `/profile/${currentUser.uid}`} element={<ProtectedRoute><Profile userDetailsByUid={userDetailsByUid}/></ProtectedRoute>} /> */}
          {userDetailsByUid && reviews ?
            <Route path="/profile/:id"
              element={
                <ProtectedRoute>
                  <Profile 
                    userDetailsByUid={userDetailsByUid}
                    reviews={reviews}/>
                </ProtectedRoute>} />
            : "loading"}   
                    
            {userDetailsByUid ?
            <Route path="/update-profile/:id"
              element={
                <ProtectedRoute>
                  <UpdateProfile userDetailsByUid={userDetailsByUid}/>
                </ProtectedRoute>} />
            : "loading"}
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/review-form" element={<ProtectedRoute><ReviewForm
          jobTypes={jobTypes}
          companiesInfo={companiesInfo}
          tipOutTypes={tipOutTypes}
          userDetailsByUid={userDetailsByUid}/></ProtectedRoute>}/>
          {companiesInfo.length > 0 && jobTypes.length > 0 ? <Route path="/companies/:id/company-comparison" element={<CompanyComparison
            jobTypes={jobTypes}
            companiesInfo={companiesInfo}
            saveSearchDetail={saveSearchDetail}
            searchResults={searchResults}
            // shouldNavigate={shouldNavigate}

          />}
          /> : "loading"}
        </Routes>
      </Container>
    </Router>
  )
}

export default MainContainer
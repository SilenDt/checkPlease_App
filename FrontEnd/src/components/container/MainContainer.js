import SignUp from  "../auth/SignUp";
import SignIn from "../auth/SignIn";
import NavBar from "../layout/NavBar";
import Dashboard from "../dashboard/Dashboard";
import Profile from "../pages/Profile";
import ProtectedRoute from "../security/ProtectedRoute"
import SignUpForm from "../auth/SignUpForm";
import ForgotPassword from "../auth/ForgotPassword";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Container, Row, Column} from "react-bootstrap"
import { useState, useEffect } from "react";
import { getCompaniesInfo } from "../../services/CompanyServices";



const MainContainer = () => {

  const [companiesInfo, setCompaniesInfo] = useState([])
  const [typed, setTyped] = useState("")
  const [chosenCategory, setChosenCategory] = useState("")
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getCompaniesInfo()
    .then((allCompaniesInfo) => {
        setCompaniesInfo(allCompaniesInfo)
    })
  }, [])

  // const companies = [
  //   {id: 1, name:"TGI Friday's", location:"Boston"},
  //   {id: 2, name:"Olive Garden", location:"Boulder"},
  //   {id:3, name: "Taco Bell", location:"New York"},
  //   {id: 4, name: "Wasabi", location:"Little Rock"}
  // ]

  const dropdownSelect = (category) => {
    const chosenCategory = category
    setChosenCategory(chosenCategory)
  }

  const handleSearch = () => {
    const filteredResults = companiesInfo.filter(
      (company) => company.town.toLowerCase().includes(typed.toLowerCase())
    );
    setSearchResults(filteredResults);
    }




  return(
<Router>
          <NavBar/>
            <Container 
              className="d-flex align-items-center justify-content-center" 
              style={{minHeight:"60vh"}}>
                <Routes>
                      <Route exact path="/" element={<ProtectedRoute><Dashboard 
                      chosenCategory={chosenCategory}
                      dropdownSelect={dropdownSelect}
                      typed={typed}
                      searchResults={searchResults}
                      companiesInfo={companiesInfo}
                      handleSearch={handleSearch}
                      />
                      
                      </ProtectedRoute>}/>
                      <Route path="/signin" element={<SignIn/>}></Route>
                      <Route path="/signup" element={<SignUp/>}></Route>
                      <Route path="/signupform" element={<ProtectedRoute><SignUpForm/></ProtectedRoute>}></Route>
                      <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
                      <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
                    </Routes> 
            </Container>
        </Router>
        )
}

export default MainContainer
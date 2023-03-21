import React, {useState} from "react";
import CompanyList from "../pages/CompanyList";
import {Dropdown, Form, Card, Button, Alert, Row, Col, FloatingLabel, Image, Container} from "react-bootstrap"
import ReviewForm from "../pages/ReviewForm";
import SearchDropdown from "./SearchDropdown";
import Profile from "../pages/Profile";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, useParams } from "react-router";

const Dashboard = ({ resetSearchResults, saveSearchDetail,  searchResults, companiesInfo, onCompanyClicked, userDetailsByUid, reviews}) => {

  // state pertaining to forms can live outwith the top-level, because forms are special
  const [searchbarInput, setSearchbarInput] = useState("")
  const { id } = useParams()
  const navigate = useNavigate()
  const isLoggedIn = useAuth()

console.log("this is dashboard user details")
console.log(userDetailsByUid)

  const handleChange = (e) => {
    const searchInput = e.target.value
    console.log({searchInput})
    setSearchbarInput(searchInput)
    saveSearchDetail(searchInput)
  
  }

  const onSelect = (companyId) => {
    resetSearchResults()
    navigate(`/companies/${companyId}`)
  }
  
  return (
    <>
    <Form>
      <Row>
        <Form.Group className="mt-3" style={{width: "75%"}} controlId="form-input-choice">
          <FloatingLabel controlId="floatingInputGrid" label="Search for a company using restaurant name or location">
          <Form.Control type="search" placeholder="Search here..." value={searchbarInput} onChange={handleChange}/>
          </FloatingLabel>
        </Form.Group>
        </Row>
        <Row>
        {searchResults.length > 0 ?
          <ul>
            <SearchDropdown searchResults={searchResults} resetSearchResults={resetSearchResults} onSelect={onSelect}/>
          </ul>
        : ""}
    </Row>
    </Form>
    <Row className="mt-3">
      <Col sm={9}>
          <CompanyList
          companiesInfo={companiesInfo}
          onCompanyClicked={onCompanyClicked}
          reviews = {reviews}
          />
      </Col>
      <Col sm={3}>
        {isLoggedIn.currentUser && userDetailsByUid && reviews? 
        (<Profile userDetailsByUid={userDetailsByUid}
                  reviews={reviews}
          />) 
        : "loading"}
      </Col>
      </Row> 
  </>
  )
}

export default Dashboard;


import React, {useState} from "react";
import CompanyList from "../pages/CompanyList";
import {Dropdown, Form, Card, Button, Alert, Row, Col, FloatingLabel, Image, Container} from "react-bootstrap"
import ReviewForm from "../pages/ReviewForm";
import SearchDropdown from "./SearchDropdown";
import Profile from "../pages/Profile";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate, useParams } from "react-router";

const Dashboard = ({ saveSearchDetail,  searchResults, companiesInfo, selectedCompany, onCompanyClicked, userDetailsByUid, jobTypes, tipOutTypes }) => {

  // state pertaining to forms can live outwith the top-level, because forms are special
  const [searchbarInput, setSearchbarInput] = useState("")
  const { id } = useParams()
  const navigate = useNavigate()
  const isLoggedIn = useAuth()


  const handleChange = (e) => {
    const searchInput = e.target.value
    console.log({searchInput})
    setSearchbarInput(searchInput)
    saveSearchDetail(searchInput)
  
  }

  const onSelect = (companyId) => {
    navigate(`/companies/${companyId}`)
  }
  
  return (
    <>
    <Form>
      <Row>
        <Form.Group className="mb-3 mt-3" style={{width: "40%"}} controlId="form-input-choice">
          <FloatingLabel controlId="floatingInputGrid" label="Search for a company using restaurant name or location">
          <Form.Control type="search" placeholder="Search here..." value={searchbarInput} onChange={handleChange}/>
          </FloatingLabel>
        </Form.Group>
        </Row>
        <Row>
          <ul>
            <SearchDropdown searchResults={searchResults} onSelect={onSelect}/>
          </ul>
    </Row>
    </Form>
    <Row>
      <Col sm={8}>
          <CompanyList
          companiesInfo={companiesInfo}
          onCompanyClicked={onCompanyClicked}
          />
      </Col>
      </Row> 
      {isLoggedIn.currentUser && userDetailsByUid ? 
      (<Profile userDetailsByUid={userDetailsByUid}/>) 
      : "loading"}

      <Container>
      <ReviewForm
      jobTypes={jobTypes}
      companiesInfo={companiesInfo}
      tipOutTypes={tipOutTypes}/>
    </Container>

  </>
  )
}

export default Dashboard;


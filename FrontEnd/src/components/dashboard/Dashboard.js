import React, {useState} from "react";
import CompanyList from "../pages/CompanyList";
import { getCompaniesInfo } from "../../services/CompanyServices";
import {Dropdown, Form, Card, Button, Alert, Row, Col, FloatingLabel, Image, Container} from "react-bootstrap"
import ReviewForm from "../pages/ReviewForm";
import SearchDropdown from "./SearchDropdown";

const Dashboard = ({ saveSearchDetail,  searchResults, companiesInfo, selectedCompany, onCompanyClicked }) => {

  // state pertaining to forms can live outwith the top-level, because forms are special
    const [searchbarInput, setSearchbarInput] = useState("")


  const handleChange = (e) => {
    const searchInput = e.target.value
    console.log({searchInput})
    setSearchbarInput(searchInput)
    saveSearchDetail(searchInput)
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
            <SearchDropdown searchResults={searchResults}/>
          </ul>
    </Row>
    </Form>
        <CompanyList
        companiesInfo={companiesInfo}
        onCompanyClicked={onCompanyClicked}
        />
  
      <Container>
      <ReviewForm/>
    </Container>
  
  </>
  // <input id='input' type='text' placeholder='Search here...' value={searchbarInput} onChange={handleChange} />
  )
}

export default Dashboard;


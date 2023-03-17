import React, {useState} from "react";
import CompanyList from "../pages/CompanyList";
import { getCompaniesInfo } from "../../services/CompanyServices";
import {Form, Card, Button, Alert, Row, Col, FloatingLabel, Image, Container} from "react-bootstrap"
import ReviewForm3 from "../pages/ReviewForm3";
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
  
  console.log(companiesInfo)
  return (
    <>
    <Form>
      <Row    className="g-2">
        <Col>
        <Form.Group className="mb-3" controlId="form-input-choice">
          <FloatingLabel controlId="floatingInputGrid" label="Search for a company below using restaurant name or location">
          <Form.Control type="search" placeholder="Search here..." value={searchbarInput} onChange={handleChange}/>
          </FloatingLabel>
        </Form.Group>
        </Col>
        <Col>
          <ul>
            <SearchDropdown searchResults={searchResults}/>
          </ul>
        </Col>
    </Row>
    </Form>
        <CompanyList
        companiesInfo={companiesInfo}
        onCompanyClicked={onCompanyClicked}
        />
     
      <Container>
      <ReviewForm3/>
    </Container>
  
  </>
  // <input id='input' type='text' placeholder='Search here...' value={searchbarInput} onChange={handleChange} />
  )
}

export default Dashboard;


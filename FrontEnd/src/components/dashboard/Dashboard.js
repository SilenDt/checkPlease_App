import React, {useState} from "react";
import CompanyList from "../pages/CompanyList";
import { getCompaniesInfo } from "../../services/CompanyServices";
import {Form, Card, Button, Alert, Row, Col, FloatingLabel, Image, Container} from "react-bootstrap"
import SearchDropdown from "./SearchDropdown";

const Dashboard = ({ saveSearchDetail,  searchResults, companiesInfo, selectedCompany, onCompanyClicked }) => {

    const [searchbarInput, setSearchbarInput] = useState("")


    // the searchinput state can live here :) 
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
  </>
  // <input id='input' type='text' placeholder='Search here...' value={searchbarInput} onChange={handleChange} />
  )
}

export default Dashboard;


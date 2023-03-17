import React from "react";
import CompanyList from "../pages/CompanyList";
import { getCompaniesInfo } from "../../services/CompanyServices";
import {Form, Card, Button, Alert, Row, Col, FloatingLabel, Image, Container} from "react-bootstrap"

const Dashboard = ({ chosenCategory, dropdownSelect, typed,
  searchResults, companiesInfo, handleSearch, selectedCompany, onCompanyClicked }) => {


  const handleSelect = (e) => {
    const category = e.target.value
    dropdownSelect(category)
  }

  console.log(companiesInfo)
  return (
    <>
    <Form>
      <Row    className="g-2">
        <Col>
        <Form.Group className="mb-3" controlId="form-input-choice">
          <FloatingLabel controlId="floatingInputGrid" label="input-choice">
          <Form.Control type="search" placeholder="search here..." />
          </FloatingLabel>
        </Form.Group>
        </Col>
        <Col>
        <Form.Group>
        <FloatingLabel
        controlId="floatingSelectGrid"
        label="Open this select menu"
      >
        <Form.Select aria-label="Floating label select example">
          <option value="1">Company Name</option>
          <option value="2">Location</option>
          <option value="3">Job Title</option>
        </Form.Select>
      </FloatingLabel>
        </Form.Group>
        </Col>
    </Row>
    </Form>
        <CompanyList
        companiesInfo={companiesInfo}
        onCompanyClicked={onCompanyClicked}
        />
  </>
  )
}

export default Dashboard;


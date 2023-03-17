import React from "react";
import CompanyList from "../pages/CompanyList";
import { getCompaniesInfo } from "../../services/CompanyServices";
import {Form, Card, Button, Alert, Row, Col, FloatingLabel} from "react-bootstrap"

const Dashboard = ({ chosenCategory, dropdownSelect, typed,
  searchResults, companiesInfo, handleSearch, selectedCompany }) => {


  const handleSelect = (e) => {
    const category = e.target.value
    dropdownSelect(category)
  }

  return (
    <>
    <Row className="g-2">
    <Col md>
      <FloatingLabel controlId="floatingInputGrid" label="input-choice">
        <Form.Control type="Search here..."/>
      </FloatingLabel>
    </Col>
    <Col md>
      <FloatingLabel
        controlId="floatingSelectGrid"
        label="Works with selects"
      >
        <Form.Select aria-label="Floating label select example">
          <option>Open this select menu</option>
          <option value="1">Company Name</option>
          <option value="2">Location</option>
          <option value="3">Job Title</option>
        </Form.Select>
      </FloatingLabel>
    </Col>
  </Row>
  <CompanyList
      companiesInfo={companiesInfo}
      />
  </>
  )
}

export default Dashboard;


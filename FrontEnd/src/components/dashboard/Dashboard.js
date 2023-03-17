import React from "react";
import CompanyList from "../pages/CompanyList";
import { getCompaniesInfo } from "../../services/CompanyServices";
import {Form, Card, Button, Alert, Row, Col, FloatingLabel, Image, Container} from "react-bootstrap"
import ReviewForm3 from "../pages/ReviewForm3";

const Dashboard = ({ chosenCategory, dropdownSelect, typed,
  searchResults, companiesInfo, handleSearch, selectedCompany, onCompanyClicked }) => {


  const handleSelect = (e) => {
    const category = e.target.value
    dropdownSelect(category)
  }

  return (
    <>
    <Container>
    <Container>
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
  </Container>
  <Container>
      <Row>
        <Col sm={5}>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/8/85/Burger_King_logo_%281999%29.svg"  className="img-fluid" alt="Burger King logo"/>
        </Col>
        <Col sm={7}>
        <CompanyList
        companiesInfo={companiesInfo}
        onCompanyClicked={onCompanyClicked}
        />

        </Col>
      </Row>
      </Container>
      <ReviewForm3/>
    </Container>
  
  </>
  )
}

export default Dashboard;


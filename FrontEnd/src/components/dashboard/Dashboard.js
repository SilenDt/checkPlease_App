import React from "react";
import CompanyList from "../pages/CompanyList";
import { getCompaniesInfo } from "../../services/CompanyServices";
import {Form, Card, Button, Alert, Row, Col, FloatingLabel, Image, Container} from "react-bootstrap"

const Dashboard = ({ chosenCategory, dropdownSelect, typed,
  searchResults, companiesInfo, handleSearch, selectedCompany }) => {


  const handleSelect = (e) => {
    const category = e.target.value
    dropdownSelect(category)
  }

  return (
    <>
    <Container>
      <Row>
        <Col sm={5}>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/8/85/Burger_King_logo_%281999%29.svg" fluid class="img-fluid" alt="Burger King logo"/>
        </Col>
        <Col sm={7}>
        <CompanyList
        companiesInfo={companiesInfo}/>

        </Col>
      </Row>
    </Container>
  
  </>
  )
}

export default Dashboard;


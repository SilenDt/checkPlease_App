import React from "react";
import CompanyList from "../pages/CompanyList";
import { getCompaniesInfo } from "../../services/CompanyServices";
import {Form, Card, Button, Alert, Row, Col, FloatingLabel, Image, Container} from "react-bootstrap"

const Dashboard = ({ saveSearchDetail, searchbarInput,
  searchResults, companiesInfo, handleSearch, selectedCompany, onCompanyClicked }) => {


  const handleChange = (e) => {
    const searchInput = e.target.value
    saveSearchDetail(searchInput)
  }



  return (
    <div>
      <div>
        <Card>
          <Card.Body>
            <h2>Search for a company below using restaurant name or location</h2>
            <Form>
              <input id='input' type='text' placeholder='Search here...' value={searchbarInput} onChange={handleChange} />
            </Form>
        </Card.Body>
        </Card>
      </div>
      <CompanyList
        companiesInfo={companiesInfo}
        onCompanyClicked={onCompanyClicked}
        />
      </div>
  )
}

export default Dashboard;


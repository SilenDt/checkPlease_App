import React from "react";
import CompanyList from "../pages/CompanyList";
import { getCompaniesInfo } from "../../services/CompanyServices";
import {Form, Card, Button, Alert} from "react-bootstrap"

const Dashboard = ({ chosenCategory, dropdownSelect, typed,
  searchResults, companiesInfo, handleSearch }) => {


  const handleSelect = (e) => {
    const category = e.target.value
    dropdownSelect(category)
  }

  return (
    <div>
      <div>
        <Card>
          <Card.Body>
            <Form>
              <select id='selectId' onChange={handleSelect}>
                <option value="">All categories</option>
                <option value="company">Company Name</option>
                <option value="location">Location</option>
              </select>
              <input id='input' type='text' placeholder='Search here...' defaultValue={typed} onChange={handleSearch} />
            </Form>
        </Card.Body>
        </Card>
      </div>
      <CompanyList
        companiesInfo={companiesInfo}
      />
    </div>
  )
}

export default Dashboard;


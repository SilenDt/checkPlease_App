import React from "react";
import CompanyList from "../pages/CompanyList";
import {Form, Card, Button, Alert} from "react-bootstrap"

const Dashboard = ({ dropdownSelect, companiesInfo, saveSearchDetail, searchbarInput, searchResults }) => {


  // const handleSelect = (e) => {
  //   const category = e.target.value
  //   dropdownSelect(category)
  // }

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
              {/* <select id='selectId' onChange={handleSelect}>
                <option value="">All categories</option>
                <option value="company">Company Name</option>
                <option value="location">Location</option>
              </select> */}
              <input id='input' type='text' placeholder='Search here...' value={searchbarInput} onChange={handleChange} />
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


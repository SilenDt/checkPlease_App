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



  return (
    <div>
      <div>
        <Card>
          <Card.Body>
            <h2>Search for a company below using restaurant name or location</h2>
            <Form>
              <input id='input' type='text' placeholder='Search here...' value={searchbarInput} onChange={handleChange} />
            </Form>
            <ul>
              <SearchDropdown searchResults={searchResults}/>
            </ul>
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


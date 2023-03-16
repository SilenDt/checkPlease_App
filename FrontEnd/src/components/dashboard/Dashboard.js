import React from "react";
import { getCompaniesInfo } from "../../services/CompanyServices";
import CompanyList from "../pages/CompanyList";

const Dashboard = ({chosenCategory, dropdownSelect, typed,
  searchResults, companiesInfo, handleSearch}) => {
  
  
  const handleSelect = (e) => {
    const category = e.target.value
    dropdownSelect(category)
  }
  
  
    return(
      <div>
        <div>
          <form id='searchForm'>
            <select id='selectId' onChange={handleSelect}>
              <option value="">All categories</option>
              <option value="company">Company Name</option>
              <option value="location">Location</option>
            </select>
            <input id='input' type='text' placeholder='Search here...' value={typed}/>
            <>onChange={handleSearch}</>
          </form>
        </div>
        <CompanyList
          companiesInfo={companiesInfo}
        />
      </div>
    )
  }
  
  export default Dashboard;


import React from "react";
import { getCompanyInfo } from "../../services/CompanyServices";

const Dashboard = ({chosenCategory, dropdownSelect, typed,
  searchResults, companyInfo, handleSearch}) => {
  
  
  const handleSelect = (e) => {
    const category = e.target.value
    dropdownSelect(category)
  }
  
  
    return(
      <div>
        <div>
          <image>Company Logo here</image>
        </div>
  
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
      </div>
    )
  }
  
  export default Dashboard;


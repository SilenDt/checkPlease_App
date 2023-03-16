import React, { useState } from "react";
import { getCompanyInfo } from "../../services/CompanyServices";

const Dashboard = () => {


  // const [companyInfo, setCompanyInfo] = useState([])
  const [typed, setTyped] = useState("")
  const [chosenCategory, setChosenCategory] = useState("")
  const [searchResults, setSearchResults] = useState([])
    

  const companies = [
    {id: 1, name:"TGI Friday's", location:"Boston"},
    {id: 2, name:"Olive Garden", location:"Boulder"},
    {id:3, name: "Taco Bell", location:"New York"},
    {id: 4, name: "Wasabi", location:"Little Rock"}
  ]
  
  
  // useEffect(() => {
  //   getCompanyInfo()
  //   .then((allCompanyInfo) => {
  //       setCompanyInfo(allCompanyInfo)
  //   })
  // }, [])
  
  
  const dropdownSelect = (category) => {
    const chosenCategory = category
    setChosenCategory(chosenCategory)
  }
  
  const handleSelect = (e) => {
    const category = e.target.value
    dropdownSelect(category)
  }
  
  const handleSearch = () => {
  const filteredResults = companies.filter(
    (company) => company.location.toLowerCase().includes(typed.toLowerCase())
  );
  setSearchResults(filteredResults);
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


import { Dropdown, DropdownButton, Container } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import { useState } from "react";
import { useNavigate } from "react-router";

const SearchDropdown = ({ searchResults, shouldNavigate, onSelect }) => {
    const navigate = useNavigate()

    const dropdownDisplay = searchResults.map((result) => (
        <Dropdown.Item eventKey={result.id} >{result.name}</Dropdown.Item>

    ))
    // console.log(dropdownDisplay)
    console.log(searchResults)

    const curentSearchResults = searchResults.map((result) => (
        result.id
    ));
    console.log(curentSearchResults)

    const handleSelect = (id) => {
        if (shouldNavigate) {
            navigate(`/companies/${curentSearchResults}`)
        }
        onSelect(id)
    }

    //dropdownDisplay is the list with all companies by name
    //look inside companiesInfo for a company which name matches the dropsownDisp

    return (
        <div className="search-results-dropdown">
            <DropdownButton
                
                title="Dropdown right"
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
            >
                {dropdownDisplay}
            </DropdownButton>
    
        </div>
    )
}

export default SearchDropdown
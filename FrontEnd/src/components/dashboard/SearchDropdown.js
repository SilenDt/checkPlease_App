import { Button, Dropdown, DropdownButton, Container, Card } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const SearchDropdown = ({ searchResults, showComparison, shouldNavigate, onSelect }) => {
    // const navigate = useNavigate()

    
    const dropdownDisplay = searchResults.map((result) => (
        <div>
                <Card.Body >
                    <Dropdown.Item eventKey={result.id} >{result.name}</Dropdown.Item>
                </Card.Body>
        </div>
    ))

    // console.log(searchResults)
    // shouldNavigate = true

    const curentSearchResults = searchResults.map((result) => (
        result.id
    ));
    console.log(curentSearchResults)

    const handleSelect = (id) => {
        // if (showComparison) {
        //     navigate(`/companies/${curentSearchResults}`)
        // }
        onSelect(id)
    }

    //dropdownDisplay is the list with all companies by name
    //look inside companiesInfo for a company which name matches the dropsownDisp

    return (
        <div className="search-results-dropdown">
            <Card style={{width : "74%"}}>
            <Dropdown
                // title="Dropdown right"
                // id="dropdown-menu-align-right"
                onSelect={handleSelect}
            >
                {dropdownDisplay}
            </Dropdown>
            </Card>
        </div>
    )
}

export default SearchDropdown
import { Dropdown, DropdownButton, Container } from "react-bootstrap"
import { ListGroup } from "react-bootstrap"
import { useState } from "react";
import { useNavigate } from "react-router";

const SearchDropdown = ({ searchResults, shouldNavigate, onSelect }) => {
    const [value, setValue] = useState('');
    const navigate = useNavigate()

    const dropdownDisplay = searchResults.map((result) => (
        result.name
    ))
    // console.log(dropdownDisplay)
    console.log(searchResults)

    const curentSearchResults = searchResults.map((result) => (
        result.id
    ));
    console.log(curentSearchResults)

    const handleSelect = (e) => {
        setValue(dropdownDisplay)
        if (shouldNavigate) {
            navigate(`/companies/${curentSearchResults}`)
        }
        onSelect()
        console.log(e);
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
                <Dropdown.Item eventKey="option-1">{dropdownDisplay}</Dropdown.Item>
            </DropdownButton>
    
        </div>
    )
}

export default SearchDropdown
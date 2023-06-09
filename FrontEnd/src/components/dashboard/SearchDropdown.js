import {Dropdown, Card } from "react-bootstrap"

const SearchDropdown = ({searchResults, onSelect }) => {

    const dropdownDisplay = searchResults.map((result) => (
                <Card.Body key={result.id}>
                    <Dropdown.Item eventKey={result.id} >{result.name}</Dropdown.Item>
                </Card.Body>
    ))

    const curentSearchResults = searchResults.map((result) => (
        result.id
    ));

    const handleSelect = (id) => {        
        onSelect(id)
    }


    return (
        <div className="search-results-dropdown">
            <Card style={{width : "74%"}}>
            <Dropdown
                onSelect={handleSelect}
            >
                {dropdownDisplay}
            </Dropdown>
            </Card>
        </div>
    )
}

export default SearchDropdown
import {Dropdown, Card } from "react-bootstrap"

const SearchDropdown = ({searchResults, onSelect }) => {

    const dropdownDisplay = searchResults.map((result) => (
        <div>
                <Card.Body >
                    <Dropdown.Item eventKey={result.id} >{result.name}</Dropdown.Item>
                </Card.Body>
        </div>
    ))

    const curentSearchResults = searchResults.map((result) => (
        result.id
    ));
    console.log(curentSearchResults)

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
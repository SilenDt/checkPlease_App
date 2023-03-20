import { Dropdown } from "react-bootstrap"

const SearchDropdown = ({searchResults}) => {


    const dropdownDisplay = searchResults.map((result) => (
        result.name
    ))
    console.log(searchResults)

    return (
        <div className="search-results-dropdown">
            {dropdownDisplay}
        </div>
    )
}

export default SearchDropdown
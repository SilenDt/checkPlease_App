

const SearchDropdown = ({searchResults}) => {


    const dropdownDisplay = searchResults.map((result) => (
        result.name
    ))

    return (
        <div className="search-results-dropdown">
            <li>
                {dropdownDisplay}
            </li>
        </div>
    )
}

export default SearchDropdown
// ------------ORIGINAL-------------------------

import React, { useState } from "react";

function Dashboard() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const companies = [
      { id: 1, name: "Apple", location: "California" },
      { id: 2, name: "Microsoft", location: "Washington" },
      { id: 3, name: "Amazon", location: "Washington" },
      { id: 4, name: "Google", location: "California" },
    ];

    const filteredResults = companies.filter(
      (company) =>
        company.location.toLowerCase().includes(searchValue.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        placeholder="Search by company location"
      />
      <button onClick={handleSearch}>Search</button>
      {searchResults.map((result) => (
        <div key={result.id}>
          <p>{result.name}</p>
          <p>{result.location}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;


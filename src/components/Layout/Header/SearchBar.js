import React, { useState } from 'react';
import './SearchBar.css'; // You can create a separate CSS file for styling
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Perform the search action with the searchQuery
    console.log('Searching for:', searchQuery);
  };

  return (
    <form className="search-form" onSubmit={handleSearchSubmit}>
      <div className="search-container">
        <span className="search-icon"><SearchIcon style={{height:20}}/></span>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
      </div>
      {/* <button type="submit">Search</button> */}
    </form>
  );
};

export default SearchBar;

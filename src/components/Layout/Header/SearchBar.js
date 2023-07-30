import React, { useState } from "react";
import "./SearchBar.css"; // You can create a separate CSS file for styling
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  input: {
    backgroundColor: theme.palette.background.default,
  },
}));
const SearchBar = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <form className="search-form" onSubmit={handleSearchSubmit}>
      <div className="search-container">
        <span className="search-icon">
          <SearchIcon style={{ height: 20 }} />
        </span>
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

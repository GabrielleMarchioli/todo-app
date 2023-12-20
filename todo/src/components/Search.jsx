import React from "react";

const Search = ({search, setSearch}) => (
    <div className="search">
    <h2>Search:</h2>
    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Type to search" />
  </div>
);

export default Search;
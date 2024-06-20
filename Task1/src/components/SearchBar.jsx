import React from 'react';
import '../styles/main.scss';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        onChange={e => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <span ><i className="icon search-icon"></i></span>
    </div>
  );
};

export default SearchBar;

import React from 'react';

const Search = () => (
  <form method="GET" action="/search" className="site-search">
    <div className="site-search__elements-container">
      <input
        type="search"
        id="site-search"
        className="site-search__input"
        placeholder="Search our site..."
        name="keywords"
      />
      <button type="submit" className="site-search__button">Search</button>
    </div>
  </form>
);

export default Search;

import React, { useState } from "react";
import "./Search.css"; // Import external CSS

const Search: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-container">
      <div
        className={`search-box ${searchOpen ? "open" : ""}`}
        onMouseOver={() => setSearchOpen(true)}
        onMouseOut={() => setSearchOpen(false)}
      >
        <svg
          className={`search-icon ${searchOpen ? "hidden" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        {searchOpen && (
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearchTerm}
            placeholder="Search"
            className="search-input"
          />
        )}
      </div>
    </div>
  );
};

export default Search;

import React from "react";

const SearchBar = ({ query, setQuery, searchMovies }) => {
  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-3 w-full rounded-l-md"
        placeholder="Search for a Movie"
      />
      <button
        onClick={searchMovies}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md flex-shrink-0"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;

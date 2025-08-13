import React from 'react';

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="flex w-full max-w-md mx-auto mt-4">
      <input
        type="text"
        placeholder="Stadt oder Adresse eingeben..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow px-4 border border-gray-300 rounded-l-md focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 rounded-r-md hover:bg-red-600 transition cursor-pointer logoBG logoTextWhite hoverLogoMehr"
      >
        🔍 Suchen
      </button>
    </div>
  );
};

export default SearchBox;


// bf2330
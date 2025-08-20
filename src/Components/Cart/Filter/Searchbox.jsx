import React from 'react';

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
   <div className="flex w-full max-w-md mx-auto mt-4 overflow-x-auto">
  <input
    type="text"
    placeholder="Stadt oder Adresse eingeben..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none min-w-0"
  />
  <button
    onClick={handleSearch}
    className="px-3 py-2 text-sm rounded-r-md hoverLogoMehr transition cursor-pointer logoBG logoTextWhite hoverLogoMehr whitespace-nowrap"
  >
    🔍 Suchen
  </button>
</div>
  );
};

export default SearchBox;


// bf2330
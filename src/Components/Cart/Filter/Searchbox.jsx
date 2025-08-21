import React, { useState, useEffect, useRef } from 'react';

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);

  const cities = [
    'Hamburg',
    'Berlin',
    'München',
    'Köln',
    'Frankfurt',
    'Stuttgart',
    'Leipzig',
    'Düsseldorf',
    'Bremen',
    'Hannover',
  ];

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
    setShowSuggestions(false);
  };

  const handleSelectCity = (city) => {
    setQuery(city);
    setShowSuggestions(false);
  };

  // ✅ إغلاق القائمة عند النقر خارج العنصر
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full max-w-2xl mx-auto mt-4">
      <div className="flex w-full overflow-x-auto">
        <input
          type="text"
          placeholder="Stadt oder Adresse eingeben..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          className="flex-grow px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none min-w-0"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-3 text-sm rounded-r-md hoverLogoMehr transition cursor-pointer logoBG logoTextWhite hoverLogoMehr whitespace-nowrap"
        >
          🔍 Suchen
        </button>
      </div>

      {showSuggestions && (
        <ul className="absolute z-10 bg-white border border-gray-300 rounded-md mt-1 w-full shadow-md">
          {cities.map((city, index) => (
            <li
              key={index}
              onClick={() => handleSelectCity(city)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
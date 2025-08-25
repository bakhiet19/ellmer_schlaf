import React, { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAllApartment } from '../../../Services/api';

const suggestions = [
  // مدن رئيسية
  'Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt', 'Stuttgart', 'Düsseldorf',

  // مدن كبيرة أخرى
  'Leipzig', 'Dresden', 'Hannover', 'Nürnberg', 'Bremen', 'Essen', 'Dortmund', 'Bonn',
  'Mannheim', 'Karlsruhe', 'Aachen', 'Wiesbaden', 'Mainz',

  // مدن جامعية وسياحية
  'Freiburg', 'Regensburg', 'Rostock', 'Kiel', 'Heidelberg', 'Scharbeutz',

  // مدن إضافية مقترحة
  'Potsdam', 'Lübeck', 'Ulm', 'Osnabrück', 'Flensburg', 'Trier', 'Konstanz',
  'Göttingen', 'Jena', 'Cottbus', 'Wuppertal', 'Bielefeld', 'Erfurt', 'Magdeburg',
  'Bremerhaven', 'Passau', 'Landshut', 'Bamberg', 'Coburg'
];

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);

  const filteredSuggestions = suggestions.filter(city =>
    city.toLowerCase().includes(query.toLowerCase())
  );

  const {data,isFetching,refetch} = useQuery({
    queryKey: ['apartments', query],
    queryFn: ({ queryKey }) => {
      const [_key, city] = queryKey;
      return getAllApartment('/appartements/', { city });
    },
   
  });

  const handleSearch = () => {
    if (query.length >= 2) {
      refetch();
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSelectCity = (city) => {
    setQuery(city);
    setShowSuggestions(false);
    refetch();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (onSearch && data) {
      onSearch(data);
    }
  }, [data, onSearch]);

return (
  <div ref={wrapperRef} className="relative sm:w-12 md:w-full mt-4 col-span-full">
    <div className="flex w-full relative min-w-0">
      <input
        type="text"
        placeholder="Stadt oder Adresse eingeben..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setShowSuggestions(true);
        }}
        onKeyDown={handleKeyDown}
        className="flex-grow px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none min-w-0"
        aria-label="Suchfeld"
      />

      {query && (
        <button
          onClick={() => setQuery('')}
          className="absolute right-12 top-3 text-gray-400 hover:text-gray-600"
          aria-label="Suchfeld löschen"
        >
          ✖
        </button>
      )}

      <button
        onClick={handleSearch}
        disabled={isFetching}
        className={`px-4 py-3 text-base rounded-r-md whitespace-nowrap transition ${
          isFetching
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'logoBG logoTextWhite hoverLogoMehr cursor-pointer'
        }`}
        aria-label="Suche starten"
      >
        🔍 Suchen
      </button>
    </div>
  </div>
);


};

export default SearchBox;
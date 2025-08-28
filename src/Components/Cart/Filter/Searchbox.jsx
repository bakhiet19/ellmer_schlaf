import React, { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllApartment } from "../../../Services/api";

const suggestions = [
  "Berlin", "Hamburg", "München", "Köln", "Frankfurt", "Stuttgart", "Düsseldorf",
  "Leipzig", "Dresden", "Hannover", "Nürnberg", "Bremen", "Essen", "Dortmund", "Bonn",
  "Mannheim", "Karlsruhe", "Aachen", "Wiesbaden", "Mainz",
  "Freiburg", "Regensburg", "Rostock", "Kiel", "Heidelberg", "Scharbeutz",
  "Potsdam", "Lübeck", "Ulm", "Osnabrück", "Flensburg", "Trier", "Konstanz",
  "Göttingen", "Jena", "Cottbus", "Wuppertal", "Bielefeld", "Erfurt", "Magdeburg",
  "Bremerhaven", "Passau", "Landshut", "Bamberg", "Coburg"
];

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);

  // فلترة live للـ suggestions
  const filteredSuggestions = suggestions.filter((city) =>
    city.toLowerCase().includes(query.toLowerCase())
  );

  const { data, refetch } = useQuery({
    queryKey: ["apartments", query],
    queryFn: ({ queryKey }) => {
      const [_key, city] = queryKey;
      return getAllApartment("/appartements/", { city });
    },
    enabled: false, // نتحكم بالـ fetch يدوي
  });

  const handleSearch = () => {
    if (query.trim() === "") {
      getAllApartment("/appartements/").then((res) => {
        if (onSearch) onSearch(res);
      });
      setShowSuggestions(false);
      return;
    }
    refetch();
    setShowSuggestions(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSelectCity = (city) => {
    setQuery(city);
    setShowSuggestions(false);
    refetch();
  };

  // إغلاق القائمة إذا كبس برا
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (onSearch && data) {
      onSearch(data);
    }
  }, [data, onSearch]);

  return (
    <div ref={wrapperRef} className="w-full mt-4 relative">
      <div className="relative min-w-0">
        <input
          type="text"
          placeholder="Stadt oder Adresse eingeben..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onKeyDown={handleKeyDown}
          className="w-full px-4 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none"
          aria-label="Suchfeld"
        />

        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Suchfeld löschen"
          >
            ✖
          </button>
        )}

        {/* Dropdown suggestions */}
        {showSuggestions && query && (
          <ul className="absolute z-50 bg-white border border-gray-200 rounded-md mt-1 w-full max-h-60 overflow-y-auto shadow-lg">
            {filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((city, index) => (
                <li
                  key={index}
                  onClick={() => handleSelectCity(city)}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                >
                  {city}
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">Keine Treffer</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBox;

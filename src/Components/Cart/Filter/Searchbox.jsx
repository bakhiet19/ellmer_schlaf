import React, { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllApartment } from "../../../Services/api";
import { FaSearch } from "react-icons/fa";
import { Controller, useFormContext } from "react-hook-form";

// قائمة الولايات الألمانية
const suggestions = [
  "Baden-Württemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg",
  "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfalen",
  "Rheinland-Pfalz", "Saarland", "Sachsen", "Sachsen-Anhalt",
  "Schleswig-Holstein", "Thüringen"
];

// 10 Kreise تجريبية في Bayern
const bayernKreise = [
  "München", "Nürnberg", "Augsburg", "Regensburg", "Ingolstadt",
  "Passau", "Landshut", "Bamberg", "Coburg", "Rosenheim"
];

const SearchBox = ({ onSearch }) => {
  const { control } = useFormContext();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const wrapperRef = useRef(null);

  const { data, refetch } = useQuery({
    queryKey: ["apartments"],
    queryFn: () => getAllApartment("/appartements/"),
    enabled: false,
  });

  useEffect(() => {
    if (onSearch && data) {
      onSearch(data);
    }
  }, [data, onSearch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="w-full mt-4 relative space-y-4">
      <div className="relative min-w-0">
        <label className="flex items-center gap-2 mb-1">
          <FaSearch className="logoText" />
          Finde Deine Unterkunft nach Bundesland
        </label>

        <Controller
          name="search"
          control={control}
          rules={{ required: "Dieses Feld ist erforderlich" }}
          render={({ field, fieldState }) => {
            const filteredSuggestions = suggestions.filter((state) =>
              state.toLowerCase().includes(field.value?.toLowerCase() || "")
            );

            const handleSelectState = (state) => {
              field.onChange(state);
              setSelectedState(state);
              setShowSuggestions(false);
              refetch();
            };

            return (
              <>
                <input
                  required
                  {...field}
                  type="text"
                  placeholder="Bundesland oder Adresse eingeben..."
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    setSelectedState("");
                    setShowSuggestions(true);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      refetch();
                    }
                  }}
                  className="w-full px-4 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                  aria-label="Suchfeld"
                />

                {fieldState.error && (
                  <p className="text-red-500 text-sm mt-1">
                    {fieldState.error.message}
                  </p>
                )}

                {field.value && (
                  <button
                    type="button"
                    onClick={() => {
                      field.onChange("");
                      setSelectedState("");
                    }}
                    className="absolute right-3 top-3/4 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Suchfeld löschen"
                  >
                    ✖
                  </button>
                )}

                {showSuggestions && field.value && (
                  <ul className="absolute z-50 bg-white border border-gray-200 rounded-md mt-1 w-full max-h-60 overflow-y-auto shadow-lg">
                    {filteredSuggestions.length > 0 ? (
                      filteredSuggestions.map((state, index) => (
                        <li
                          key={index}
                          onClick={() => handleSelectState(state)}
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          {state}
                        </li>
                      ))
                    ) : (
                      <li className="px-4 py-2 text-gray-500">Keine Treffer</li>
                    )}
                  </ul>
                )}
              </>
            );
          }}
        />
      </div>

      {/* قائمة Kreise إذا كانت الولاية المختارة هي Bayern */}
      {selectedState === "Bayern" && (
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Wähle einen Kreis in Bayern
          </label>
          <Controller
            name="kreis"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="">Bitte wählen...</option>
                {bayernKreise.map((kreis, index) => (
                  <option key={index} value={kreis}>
                    {kreis}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default SearchBox;
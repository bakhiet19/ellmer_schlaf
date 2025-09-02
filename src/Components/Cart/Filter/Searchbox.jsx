import React, { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllApartment } from "../../../Services/api";
import { FaSearch } from "react-icons/fa";
import { Controller, useFormContext } from "react-hook-form";

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
  const { control } = useFormContext(); // نستخدم RHF context
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef(null);

  // React Query
  const { data, refetch } = useQuery({
    queryKey: ["apartments"],
    queryFn: () => getAllApartment("/appartements/"),
    enabled: false, // نتحكم بالـ fetch يدوي
  });

  useEffect(() => {
    if (onSearch && data) {
      onSearch(data);
    }
  }, [data, onSearch]);

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

  return (
    <div ref={wrapperRef} className="w-full mt-4 relative">
      <div className="relative min-w-0">
        <label className="flex items-center gap-2 mb-1">
          <FaSearch className="logoText" /> 
          Finde Deine nächste Unterkunft in wenigen Minuten
        </label>

        {/* نربط RHF مع SearchBox عبر Controller */}
        <Controller
          name="search"
          control={control}
          rules={{ required: "Dieses Feld ist erforderlich" }}
          render={({ field, fieldState }) => {
            const filteredSuggestions = suggestions.filter((city) =>
              city.toLowerCase().includes(field.value?.toLowerCase() || "")
            );

            const handleSelectCity = (city) => {
              field.onChange(city);
              setShowSuggestions(false);
              refetch();
            };

            return (
              <>
                <input
                  required
                  {...field}
                  type="text"
                  placeholder="Stadt oder Adresse eingeben..."
                  onChange={(e) => {
                    field.onChange(e.target.value);
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
                    onClick={() => field.onChange("")}
                    className="absolute right-3 top-3/4 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Suchfeld löschen"
                  >
                    ✖
                  </button>
                )}

                {/* Dropdown suggestions */}
                {showSuggestions && field.value && (
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
              </>
            );
          }}
        />
      </div>
    </div>
  );
};

export default SearchBox;

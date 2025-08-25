import { useContext } from "react";
import { useState } from "react";
import { FilterContext } from "../../../Hooks/FilterContext";

const cities = ['Alle Städte', 'Hamburg', 'Lübeck', 'Kiel' , 'Scharbeutz'];

export default function Cities() {
  const {filterData , setFilterData} = useContext(FilterContext)  

  return (
    <div className="mb-4 max-w-sm">
      <label className="block text-sm font-medium logoText mb-2">Stadt</label>
      <select
        onChange={(e) => setFilterData({
          ...filterData,
          stadt : e.target.value
        })}
        className="w-full px-3 py-2 border rounded-md focus:outline-none cursor-pointer "
      >
        {cities.map((city) => (
          <option className="cursor-pointer" key={city} value={city}>{city}</option>
        ))}
      </select>
    </div>
  );
}
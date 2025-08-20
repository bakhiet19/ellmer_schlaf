import { useContext, useState } from "react";
import { FilterContext } from "../../Hooks/FilterContext";

const types = ['Alle Typen', 'Wohnung', 'Haus', 'Studio', 'Gewerbe'];

export default function PropertyType() {
    const {filterData , setFilterData} = useContext(FilterContext)

  return (
    <div>
      <label className="block text-sm font-medium logoText mb-2">Typ</label>
      <select
        onChange={(e) => setFilterData({
          ...filterData,
          typ : e.target.value
        })}
        className="w-full px-3 py-2 border rounded-md focus:outline-none "
      >
        {types.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}
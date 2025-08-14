import { useContext, useState } from "react";
import { FilterContext } from "../../../Hooks/FilterContext";

export default function BedFilter() {
const {filterData , setFilterData} = useContext(FilterContext)

  return (
    <div>
      <label className="block text-sm font-medium logoText mb-2">Anzahl der Betten</label>
      <select
        onChange={(e) => setFilterData({
          ...filterData,
          anzahl : e.target.value
        })}
        className="w-full px-3 py-2 border rounded-md focus:outline-none"
      >
        <option value="">Alle</option>
        <option value="1">1 Bett</option>
        <option value="2">2 Betten</option>
        <option value="3">3 Betten</option>
        <option value="4">4 Betten</option>
        <option value="5">5+ Betten</option>
      </select>
    </div>
  );
}
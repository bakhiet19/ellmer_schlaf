import { useContext } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FilterContext } from "../../../Hooks/FilterContext";

function DistanceFilter() {

  const{ filterData, setFilterData } = useContext(FilterContext)

  return (
    <div className="w-full mb-2">
      <label htmlFor="distance" className="text-sm font-medium text-gray-700 mb-1 items-center gap-2 flex">
        <FaMapMarkerAlt className="text-red-500" />
        Entfernung vom Standort
      </label>
      <select
        name="distanz"
        id="distance"
        onChange={(e) => {
          setFilterData({...filterData , [e.target.name] : e.target.value})
        }}
        className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 appearance-none"
      >
        <option value="alle">alle Distantz</option>
        <option value="2">Bis zu 2 km</option>
        <option value="5">Bis zu 5 km</option>
        <option value="10">Bis zu 10 km</option>
        <option value="10plus">Mehr als 10 km</option>
      </select>
    </div>
  );
}

export default DistanceFilter;
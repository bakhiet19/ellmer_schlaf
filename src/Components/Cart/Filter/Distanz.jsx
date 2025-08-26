import { FaMapMarkerAlt } from "react-icons/fa";

function DistanceFilter() {
  return (
    <div className="w-full sm:w-1/3 mb-4">
      <label htmlFor="distance" className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
        <FaMapMarkerAlt className="text-red-500" />
        Entfernung vom Standort
      </label>
      <select
        id="distance"
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        <option value="2">Bis zu 2 km</option>
        <option value="5">Bis zu 5 km</option>
        <option value="10">Bis zu 10 km</option>
        <option value="10plus">Mehr als 10 km</option>
      </select>
    </div>
  );
}

export default DistanceFilter;
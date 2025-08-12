import Cities from "./Cities";
import PreisFilterInput from "./PreisFilterInput";
import PropertyType from "./PropertyType";
import RoomFilter from "./RoomFilter";
import FeaturesFilter from "./FeaturesFilter";
import ResetFilters from "./ResetFilters";

export default function FilterSection() {
  return (
    <div className="w-full max-w-6xl mx-auto mb-10 p-6 bg-gray-50 rounded-xl shadow space-y-8">
      <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold mb-4 pt-2 sm:pt-4 text-red-500">Immobilien filtern</h2>
       <div className="w-16 sm:w-24 h-1 bg-gray-600 rounded"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Cities />
        <PropertyType />
        <RoomFilter />
        <FeaturesFilter />
        <PreisFilterInput />
        
      </div>

      <div className="flex justify-end">
        <ResetFilters />
      </div>
    </div>
  );
}
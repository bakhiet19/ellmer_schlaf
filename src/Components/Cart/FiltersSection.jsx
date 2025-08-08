import Cities from "./Cities";
import PreisFilterInput from "./PreisFilterInput";
import PropertyType from "./PropertyType";
import RoomFilter from "./RoomFilter";
import FeaturesFilter from "./FeaturesFilter";
import ResetFilters from "./ResetFilters";

export default function FilterSection() {
  return (
    <div className="w-full max-w-6xl mx-auto mb-10 p-6 bg-gray-50 rounded-xl shadow space-y-8">
      <h2 className="text-2xl font-bold text-gray-800">🔍 Immobilien filtern</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Cities />
        <PropertyType />
        <RoomFilter />
        <PreisFilterInput />
        <FeaturesFilter />
      </div>

      <div className="flex justify-end">
        <ResetFilters />
      </div>
    </div>
  );
}
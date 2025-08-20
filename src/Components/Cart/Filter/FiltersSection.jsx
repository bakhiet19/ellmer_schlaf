import Cities from "./Cities";
import PropertyType from "../PropertyType";
import RoomFilter from "./RoomFilter";
import FeaturesFilter from "./FeaturesFilter";
import ResetFilters from "./ResetFilters";
import SearchBox from "./Searchbox";
import FilterButton from "./FilterButton";

export default function FilterSection() {
  return (
   <div className="w-full max-w-4xl mx-auto px-1 py-1 space-y-3">
    <div className="logoBGWhite rounded-2xl shadow-xl p-1 space-y-3 pb-8  px-2 lg:px-8 w-full">
    <SearchBox />
    <Cities />
    <PropertyType />
    <RoomFilter />
    <FeaturesFilter />
    <FilterButton />
    <ResetFilters />
  </div>
  </div>
  );
}


  {/* العنوان */}
  {/* <div className="text-center">
    <Head className="text-2xl font-bold text-gray-800 tracking-wide">
      {'IMMOBILIEN FILTERN'}
    </Head>
    <div className="w-16 h-1 bg-gray-600 rounded mx-auto mt-2"></div>
  </div> */}
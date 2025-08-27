import Cities from "./Cities";
import PropertyType from "../PropertyType";
import RoomFilter from "./RoomFilter";
import FeaturesFilter from "./FeaturesFilter";
import ResetFilters from "./ResetFilters";
import SearchBox from "./Searchbox";
import FilterButton from "./FilterButton";
import DistanceFilter from "./Distanz";

export default function FilterSection() {
  return (
 <div className="mx-auto px-3 py-3 space-y-3 logoBGWhite rounded-2xl shadow-xl p-1 pb-8 lg:px-8 w-full h-[100%]">
  <SearchBox />
  {/* <Cities /> */}

  <div className="grid grid-cols-1 items-center max-w-[100%] mt-4 mb-2 gap-1">
    <DistanceFilter />
    <PropertyType />
    <RoomFilter />
  </div>

  <div className="w-full flex flex-col md:flex-row items-center mt-2 mb-2 gap-4">
    <FeaturesFilter /> 
  </div>

  <FilterButton /> 
  <ResetFilters />
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
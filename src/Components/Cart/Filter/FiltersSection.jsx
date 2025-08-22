import Cities from "./Cities";
import PropertyType from "../PropertyType";
import RoomFilter from "./RoomFilter";
import FeaturesFilter from "./FeaturesFilter";
import ResetFilters from "./ResetFilters";
import SearchBox from "./Searchbox";
import FilterButton from "./FilterButton";

export default function FilterSection() {
  return (
  <div className="w-full max-w-7xl mx-auto px-3 py-3 space-y-3 logoBGWhite rounded-2xl shadow-xl p-1 pb-8  lg:px-8">
  <SearchBox />
  {/* <Cities /> */}
  <div className="flex flex-col md:flex-row justify-center items-center w-full my-8 gap-4">
  <PropertyType />
  <RoomFilter />
  <FeaturesFilter />
  <FilterButton />
  </div>

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
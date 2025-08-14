import Cities from "./Cities";
import PreisFilterInput from "./PreisFilterInput";
import PropertyType from "../PropertyType";
import RoomFilter from "./RoomFilter";
import FeaturesFilter from "./FeaturesFilter";
import ResetFilters from "./ResetFilters";
import Head from "../../Head";
import SearchBox from "./Searchbox";
import FilterButton from "./FilterButton";

export default function FilterSection() {
  return (
    <div className="">
      <Head>{'Immobilien filtern'.toUpperCase()}</Head>
       <div className="w-16 sm:w-24 h-1 bg-gray-600 rounded"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SearchBox />
        <Cities />
        <PropertyType />
        <RoomFilter />
        {/* <PreisFilterInput /> */}    
        <FeaturesFilter />
        <FilterButton />      
      </div>

      <div className="flex justify-end">
        <ResetFilters />
      </div>
    </div>
  );
}
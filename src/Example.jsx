import { motion } from "framer-motion";
import DistanceFilter from "./Components/Cart/Filter/Distanz";
import FilterButton from "./Components/Cart/Filter/FilterButton";
import RoomFilter from "./Components/Cart/Filter/RoomFilter";
import SearchBox from "./Components/Cart/Filter/Searchbox";
import PropertyType from "./Components/Cart/PropertyType";
import SearchButton from "./Components/Cart/Filter/FilterButton";


const Example = () => {

  function handleSearch(){
    console.log('hello');
  }



  return (
    <div className="flex flex-col justify-center lg:justify-end items-center w-full h-screen p-2 sm:p-4 example ">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-6 logoBGWhite rounded-2xl shadow-xl space-y-4"
      >

        <div className="w-full">
          <SearchBox className="w-full px-3 py-2 border rounded-md text-sm sm:text-base" />
        </div>

        <div className="flex flex-col gap-1 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-4">
          <DistanceFilter className="w-full px-3 py-2 border rounded-md text-sm sm:text-base" />
          <PropertyType className="w-full px-3 py-2 border rounded-md text-sm sm:text-base" />
          <RoomFilter className="w-full px-3 py-2 border rounded-md text-sm sm:text-base" />
        </div>

       <div className="flex justify-center md:justify-center">
        <SearchButton />
        </div>

      </motion.div>
    </div>
  );
};

export default Example;

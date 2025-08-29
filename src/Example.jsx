import { motion } from "framer-motion";
import DistanceFilter from "./Components/Cart/Filter/Distanz";
import FilterButton from "./Components/Cart/Filter/FilterButton";
import RoomFilter from "./Components/Cart/Filter/RoomFilter";
import SearchBox from "./Components/Cart/Filter/Searchbox";
import PropertyType from "./Components/Cart/PropertyType";
import SearchButton from "./Components/Cart/Filter/FilterButton";

const Example = () => {
  return (
    <div className="flex flex-col justify-center lg:justify-end items-center w-full h-screen p-4 bg-gradient-to-b from-white to-gray-50 relative example">
      
      {/* العنوان والوصف */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-6"
      >
        {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight 
       bg-gradient-to-r from-red-500 to-rose-500 text-transparent bg-clip-text">
  Finde dein perfektes Zuhause auf Zeit
</h1>

<p className="mt-3 max-w-2xl mx-auto text-base sm:text-lg text-gray-900">
  Ob für Projekte, Remote Work oder längere Aufenthalte – wir helfen dir,
  die passende Unterkunft einfach und schnell zu finden.
</p> */}

      </motion.div>

      {/* الفلاتر */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="w-full max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-6 logoBGWhite rounded-2xl shadow-xl space-y-4"
      >
        <div className="w-full">
          <SearchBox className="w-full px-3 py-2 border rounded-md text-sm sm:text-base" />
        </div>

        <div className="flex flex-col gap-2 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-4">
          <DistanceFilter className="w-full px-3 py-2 border rounded-md text-sm sm:text-base" />
          <PropertyType className="w-full px-3 py-2 border rounded-md text-sm sm:text-base" />
          <RoomFilter className="w-full px-3 py-2 border rounded-md text-sm sm:text-base" />
        </div>

        <div className="flex justify-center">
          <SearchButton />
        </div>
      </motion.div>
    </div>
  );
};

export default Example;

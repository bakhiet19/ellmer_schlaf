import DistanceFilter from "./Components/Cart/Filter/Distanz";
import FilterButton from "./Components/Cart/Filter/FilterButton";
import RoomFilter from "./Components/Cart/Filter/RoomFilter";
import SearchBox from "./Components/Cart/Filter/Searchbox";
import PropertyType from "./Components/Cart/PropertyType";
import QuestionStep from "./Mieter/Questions";



const Example = () => {
  return (
<div className="flex justify-center items-end example max-w-full h-[100vh]">
  <div className="mx-auto px-3 py-6 logoBGWhite rounded-2xl shadow-xl lg:px-8 w-full max-w-4xl space-y-4  mb-10">
    
    {/* السطر الأول: مربع البحث */}
    <div className="w-full">
      <SearchBox className="w-full px-4 py-2 border rounded-md" />
    </div>

    {/* السطر الثاني: القوائم المنسدلة */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <DistanceFilter className="w-full px-4 py-2 border rounded-md" />
      <PropertyType className="w-full px-4 py-2 border rounded-md" />
      <RoomFilter className="w-full px-4 py-2 border rounded-md" />
    </div>

    {/* السطر الثالث: زر البحث */}
    <div className="flex justify-end">
      <FilterButton className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition font-semibold shadow-sm" />
    </div>

  </div>
</div>
  );
};

export default Example;





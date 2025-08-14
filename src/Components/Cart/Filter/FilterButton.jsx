
const FilterButton = () => {

    
        const handleChange = () => {
        const vonWert = Math.max(min, Number(von));
        const bisWert = Math.min(max, Number(bis));
        if (vonWert <= bisWert && onChange) {
          onChange([vonWert, bisWert]);
        }
      };

  return (
    <div>
       <button
  onClick={handleChange}
  className="px-6 py-3 border-2 font-bold text-white bg-red-600 hover:bg-red-700 cursor-pointer rounded-xl transition duration-300 ease-in-out w-full">
  Filtern
</button>
</div>
  );
};

export default FilterButton;
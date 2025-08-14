import { useContext } from "react";
import { FilterContext } from "../../../Hooks/FilterContext";

export default function ResetFilters() {

  const { filterData, setFilterData } = useContext(FilterContext);

  function handleFilter(){
     setFilterData({
       stadt : 'Alle Städte',
    typ : 'Alle Typen',
    anzahl : 'Alle',
    extra : [],
    reset : true
    })
  }


  return (
    <button
      onClick={() => handleFilter()}
      className="text-sm logoText underline hoverLogo transition cursor-pointer"
    >
      Alle Filter zurücksetzen
    </button>
  );
}
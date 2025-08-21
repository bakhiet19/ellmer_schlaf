// 📁 Filter.jsx
import { useQuery } from "@tanstack/react-query";
import { createContext, useEffect, useState } from "react";
import { getAllApartment } from "../Services/api";


const FilterContext = createContext();

const Filter = ({ children }) => {

  const [filterData, setFilterData] = useState({
    stadt: "Alle Städte",
    typ: "Alle Typen",
    anzahl: "Alle",
    extra: [],
  });

  

  
  const city = filterData.stadt === "Alle Städte" ? undefined : filterData.stadt;


  const { data, isLoading, error } = useQuery({
    queryKey: ["appartements", city],
    queryFn: ({ queryKey }) => {
      const [, selectedCity] = queryKey;
      return getAllApartment("/appartements/", { city: selectedCity });
    },
    enabled: !!city,
  });

 
  useEffect(() => {
    if (data) console.log("appartements:", data);
  }, [data]);

  return (
    <FilterContext.Provider value={{ filterData, setFilterData }}>
      {children}
    </FilterContext.Provider>
  );
};

export { Filter, FilterContext };
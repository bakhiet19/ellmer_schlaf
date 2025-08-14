import { createContext, useEffect, useState } from "react";

  const FilterContext = createContext()

const Filter = ({children}) => {

  const [filterData , setFilterData] = useState({
    stadt : 'Alle Städte',
    typ : 'Alle Typen',
    anzahl : 'Alle',
    extra : [],
    reset : false
  })

  useEffect(() => {
    setFilterData({
       stadt : 'Alle Städte',
    typ : 'Alle Typen',
    anzahl : 'Alle',
    extra : [],
    })
  } , [filterData.reset])


  return (
    <FilterContext.Provider value={{filterData , setFilterData}}>{children}</FilterContext.Provider>
  );
};

export {Filter , FilterContext};
import { motion } from "framer-motion";
import DistanceFilter from "./Components/Cart/Filter/Distanz";
import RoomFilter from "./Components/Cart/Filter/RoomFilter";
import SearchBox from "./Components/Cart/Filter/Searchbox";
import PropertyType from "./Components/Cart/PropertyType";
import SearchButton from "./Components/Cart/Filter/FilterButton";
import FeaturesFilter from "./Components/Cart/Filter/FeaturesFilter";
import { useForm, FormProvider } from "react-hook-form";
import Reise from "./Components/Cart/Filter/Reise";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { getAllApartment } from "./Services/api";
import { useLocation } from "react-router-dom";


const Example = () => {
  const methods = useForm({
    defaultValues: {
      search: "",
      distanz: "alle",
      typ: "alle",
      anzahl: "",
      checkIn: "",
      checkOut: "",
      features: []
    }
  });
  const location = useLocation().pathname.includes('mieter');
  console.log(location);
  

  const [submittedData, setSubmittedData] = useState(null);
  const [mehrFilter , setMehrFilter] = useState(false)  

  // Mutation بدل useQuery
  const { mutate, data, isLoading, isError } = useMutation({
    mutationFn: (filters) => getAllApartment("/appartement", filters),
  });

  function onSubmit(formData) {
    console.log("✅ Form Data: ", formData);
    setSubmittedData(formData);

    // ننفذ الميوتاشن مع البيانات
    mutate(formData);
  }

  return (
    <div className="flex flex-col justify-center lg:justify-end items-center w-full
     h-full sm:h-screen p-4 bg-gradient-to-b from-white to-gray-50 relative example">
      
      <motion.form
        onSubmit={methods.handleSubmit(onSubmit)}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="w-full max-w-4xl mx-auto px-3 sm:px-6 py-4 sm:py-6 logoBGWhite rounded-2xl shadow-xl space-y-4 mt-20"
      >
        {/* نغلف كل الفلاتر بـ FormProvider */}
        <FormProvider {...methods}>
          <div className="w-full">
            <SearchBox />
          </div>

          <div className="flex flex-col gap-2 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-4">
            <DistanceFilter />
            <PropertyType />
            <RoomFilter />
            

          {mehrFilter &&  <> <Reise />
            <FeaturesFilter /></> }

          </div>
          <p className="logoText cursor-pointer font-extrabold flex gap-1 items-center w-full" onClick={() => setMehrFilter(f => ! f)}> {mehrFilter === true ? 'Weniger Filter anzeigen' : `Mehr Filter anzeigen` }  </p>
          <div className="flex justify-center">
            <SearchButton />
          </div>
        </FormProvider>

        
      </motion.form>

      {/* نعرض نتيجة الـ API */}
     
    </div>
  );
};

export default Example;

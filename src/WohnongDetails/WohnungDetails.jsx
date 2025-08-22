import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import "swiper/css";


import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";


import AirbnbStyleCalendar from "./AirbnbStyleCalendar";
import FormFragen from "../Mieter/FormFragen";
import WohnungBilder from "./WohnungBilder";
import Beschreibung from "./Beschreibung";
import ApartmentMap from "../Components/Map/Map";
import QuestionStep, { Questions } from "../Mieter/Questions";
import Rechnung from "./Rechnung";



const position = [53.551086, 9.993682]; // Hamburg Zentrum

const WohnungDetails = () => {



  return (

     <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full font-sans mt-22 mb-10">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 logoBGWhite rounded-3xl shadow-xl h-fit">
      <WohnungBilder />
      <QuestionStep />
      </div>



 
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 logoBGWhite rounded-3xl shadow-xl">       
        <Beschreibung />
        <ApartmentMap />      
        <AirbnbStyleCalendar />
         <Rechnung />
         
        </div>
      </div>
  );
};

export default WohnungDetails;
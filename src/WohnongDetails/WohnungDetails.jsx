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



const position = [53.551086, 9.993682]; // Hamburg Zentrum

const WohnungDetails = () => {



  return (

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 w-full font-sans mt-22"> 
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 logoBGWhite rounded-3xl shadow-xl">
        <WohnungBilder />
        <QuestionStep />
        {/* <FormFragen /> */}
        </div>

 
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 logoBGWhite rounded-3xl shadow-xl">
         
          <Beschreibung />
          <ApartmentMap />
          {/* تقويم الحجز */}
          <div className="logoBGWhite rounded-xl shadow-md p-6 border border-gray-200 w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
            <AirbnbStyleCalendar />
          </div>

          {/* مجموع الفاتورة */}
          <div className="logoBGWhite rounded-xl shadow-md p-6 border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Gesamtkosten</h3>
            <ul className="text-gray-700 space-y-2">
              <li>💵 Preis pro Nacht: <strong>€85</strong></li>
              <li>🧼 Reinigungsgebühr: <strong>€20</strong></li>
              <li>🧾 Servicegebühr: <strong>€15</strong></li>
              <li>📆 Nächte: <strong>3</strong></li>
            </ul>
            <hr className="my-4" />
            <p className="text-lg font-bold text-gray-900">Gesamt: €340</p>
          </div>

          {/* خريطة العقار */}
         
        </div>
      </div>
  );
};

export default WohnungDetails;
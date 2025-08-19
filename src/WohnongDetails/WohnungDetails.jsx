import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaWifi, FaBed, FaBath, FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import wohnung1 from "../assets/wohnung1.jpg";
import wohnung2 from "../assets/wohnung2.jpeg";
import wohnung3 from "../assets/wohnung3.jpeg";
import wohnung4 from "../assets/wohnung4.jpg";
import AirbnbStyleCalendar from "./AirbnbStyleCalendar";

const IMAGES = [
  wohnung1, wohnung2, wohnung3, wohnung4,
  wohnung1, wohnung2, wohnung3, wohnung4,
  wohnung1, wohnung2, wohnung3, wohnung4
];

const BIG_IMAGES = IMAGES.slice(0, 2);
const SMALL_IMAGES = IMAGES.slice(2, 6);
const ALL_IMAGES = IMAGES;

const position = [53.551086, 9.993682]; // Hamburg Zentrum

const WohnungDetails = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="w-full px-4 py-8 font-sans mt-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* ✅ العمود الأول: الصور */}
        <div className="space-y-8">
          <Swiper
            modules={[Navigation, Pagination, Keyboard, A11y]}
            navigation
            pagination={{ clickable: true }}
            keyboard
            loop
            spaceBetween={20}
            slidesPerView={1}
            className="w-full"
          >
            {BIG_IMAGES.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className="rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md">
                  <img
                    src={img}
                    alt={`Wohnung Big ${idx}`}
                    className="w-full aspect-[3/2] max-h-[400px] object-cover cursor-pointer"
                    onClick={() => setSelectedIndex(idx)}
                  />
                </div>
              </SwiperSlide>
              
            ))}
          </Swiper>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {SMALL_IMAGES.map((img, idx) => (
              <div
                key={idx + 2}
                className="rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 shadow-md"
              >
                <img
                  src={img}
                  alt={`Wohnung Small ${idx + 2}`}
                  className="w-full aspect-[3/2] max-h-[200px] object-cover cursor-pointer"
                  onClick={() => setSelectedIndex(idx + 2)}
                />                
              </div>
            ))}
          </div>




           <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 z-0">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Standort</h3>
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "400px", width: "100%", borderRadius: "0.5rem" , zIndex : '0'  }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>Wohnung in Hamburg Zentrum</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>

        {/* ✅ العمود الثاني: معلومات الشقة */}
        <div className="space-y-6">
          {/* وصف ومواصفات */}
          <div className="bg-gradient-to-br from-white to-gray-50 px-6 py-8 rounded-2xl shadow-lg space-y-6 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900">Gemütliche Wohnung mit Balkon</h2>
           <p className="text-gray-700 text-lg">
            Willkommen in Ihrer stilvollen Oase mitten in Hamburg!  
            Diese helle und gemütliche Wohnung bietet nicht nur ein komfortables Doppelbett und ein modernes Bad,  
            sondern auch einen sonnigen Balkon, auf dem Sie Ihren Morgenkaffee genießen können.  
            Die Einrichtung kombiniert skandinavische Eleganz mit urbanem Flair – perfekt für Paare, Solo-Reisende oder Geschäftsbesuche.  
            WLAN ist blitzschnell, die Lage unschlagbar: Restaurants, Cafés und Sehenswürdigkeiten sind nur wenige Schritte entfernt.
          </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-gray-800">
              <div className="flex items-center space-x-2"><FaWifi className="text-blue-500" /><span>WLAN</span></div>
              <div className="flex items-center space-x-2"><FaBed className="text-purple-500" /><span>Doppelbett</span></div>
              <div className="flex items-center space-x-2"><FaBath className="text-teal-500" /><span>Bad</span></div>
              <div className="flex items-center space-x-2"><FaMapMarkerAlt className="text-red-500" /><span>Hamburg</span></div>
            </div>
          </div>

          {/* تقويم الحجز */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 w-full sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
            <h3 className="text-xl font-semibold mb-1 p-3 logoText">Verfügbarkeit</h3>
            <AirbnbStyleCalendar />
          </div>

          {/* مجموع الفاتورة */}
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
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

      {/* ✅ Lightbox للصور */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-3xl leading-none hover:text-red-400 transition-colors"
            aria-label="Close"
            onClick={() => setSelectedIndex(null)}
          >
            ×
          </button>
          <div className="w-full max-w-[95vw] max-h-[95vh]">
            <Swiper
              key={selectedIndex}
              modules={[Navigation, Pagination, Keyboard, A11y]}
              navigation
              pagination={{ clickable: true }}
              keyboard
              loop
              initialSlide={selectedIndex}
              className="h-full"
            >
              {ALL_IMAGES.map((img, idx) => (
              <SwiperSlide key={idx} className="flex items-center justify-center">
  <div className="relative w-full h-[95vh] flex items-center justify-center">
    <img
      src={img}
      alt={`Zoomed ${idx}`}
      className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.6)]"
    />

    {/* ✅ النص فوق الصورة */}
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white px-6 py-3 rounded-lg text-md font-semibold max-w-[90%] text-center">
      Helle, stilvoll eingerichtete Wohnung mit Balkon – perfekt für entspannte Abende in Hamburg.
    </div>
  </div>
</SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
};

export default WohnungDetails;
import { useState } from "react";
import img1 from "../assets/wohnung1.jpg";
import img2 from "../assets/wohnung2.jpeg";
import img3 from "../assets/wohnung3.jpeg";
import img4 from "../assets/wohnung4.jpg";
import img5 from "../assets/wohnung6.jpeg";

import { FaWifi, FaBed, FaBroom, FaSun, FaBath } from "react-icons/fa";

const IMAGES = [img1, img2, img3, img4, img5];

export default function HotelGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      {/* الصورة الرئيسية مع Overlay */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={IMAGES[0]}
          alt="Hauptbild"
          className="w-full h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            Luxuriöses Apartment im Herzen von Hamburg
          </h2>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg shadow-lg font-semibold text-white">
            Jetzt buchen
          </button>
        </div>
      </div>



       {/* الصور المصغرة */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {IMAGES.map((img, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={img}
              alt={`Room ${idx}`}
              className="w-full h-[180px] object-cover"
              onClick={() => setSelectedIndex(idx)}
            />
          </div>
        ))}
      </div>


      {/* أيقونات المزايا */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
        <div className="flex flex-col items-center space-y-2 hover:scale-110 transition">
          <FaBed className="text-3xl text-indigo-600" />
          <span className="text-sm font-medium text-gray-700">Doppelbett</span>
        </div>
        <div className="flex flex-col items-center space-y-2 hover:scale-110 transition">
          <FaBath className="text-3xl text-indigo-600" />
          <span className="text-sm font-medium text-gray-700">Eigenes Bad</span>
        </div>
        <div className="flex flex-col items-center space-y-2 hover:scale-110 transition">
          <FaWifi className="text-3xl text-indigo-600" />
          <span className="text-sm font-medium text-gray-700">Gratis WLAN</span>
        </div>
        <div className="flex flex-col items-center space-y-2 hover:scale-110 transition">
          <FaSun className="text-3xl text-indigo-600" />
          <span className="text-sm font-medium text-gray-700">Balkon</span>
        </div>
        <div className="flex flex-col items-center space-y-2 hover:scale-110 transition">
          <FaBroom className="text-3xl text-indigo-600" />
          <span className="text-sm font-medium text-gray-700">Tägliche Reinigung</span>
        </div>
      </div>

   

      {/* Modal لتكبير الصورة */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-gray-300"
            onClick={() => setSelectedIndex(null)}
          >
            ×
          </button>
          <img
            src={IMAGES[selectedIndex]}
            alt={`Zoomed ${selectedIndex}`}
            className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl transition-transform duration-500 scale-100 hover:scale-105"
          />
        </div>
      )}
    </div>
  );
}

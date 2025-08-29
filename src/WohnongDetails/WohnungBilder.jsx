import { useState, useEffect } from "react";
import img1 from "../assets/wohnung1.jpg";
import img2 from "../assets/wohnung2.jpeg";
import img3 from "../assets/wohnung3.jpeg";
import img4 from "../assets/wohnung4.jpg";
import img5 from "../assets/wohnung6.jpeg";

import { FaWifi, FaBed, FaBroom, FaSun, FaBath } from "react-icons/fa";

const IMAGES = [
  { src: img1, desc: "Gemütliches Schlafzimmer mit Doppelbett" },
  { src: img2, desc: "Modernes Badezimmer mit Dusche" },
  { src: img3, desc: "Voll ausgestattete Küche" },
  { src: img4, desc: "Helles Wohnzimmer mit Balkonzugang" },
  { src: img5, desc: "Tägliche Reinigung inklusive" },
];

export default function HotelGallery() {
  const [mainIndex, setMainIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setMainIndex((prev) => (prev + 1) % IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % IMAGES.length);
  };

  return (
    <div className="px-4 py-10 space-y-10">
      {/* الصورة الكبيرة */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
        <img
          src={IMAGES[mainIndex].src}
          alt="Hauptbild"
          className="w-full h-[600px] object-cover transition-all duration-500"
        />
        <div className="absolute inset-0 bg-black/10 flex items-center justify-center text-white text-xl font-semibold">
          {/* {IMAGES[mainIndex].desc} */}
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
              src={img.src}
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
          <FaBed className="text-3xl logoText" />
          <span className="text-sm font-medium text-gray-700">Doppelbett</span>
        </div>
        <div className="flex flex-col items-center space-y-2 hover:scale-110 transition">
          <FaBath className="text-3xl logoText" />
          <span className="text-sm font-medium text-gray-700">Eigenes Bad</span>
        </div>
        <div className="flex flex-col items-center space-y-2 hover:scale-110 transition">
          <FaWifi className="text-3xl logoText" />
          <span className="text-sm font-medium text-gray-700">Gratis WLAN</span>
        </div>
        <div className="flex flex-col items-center space-y-2 hover:scale-110 transition">
          <FaSun className="text-3xl logoText" />
          <span className="text-sm font-medium text-gray-700">Balkon</span>
        </div>
        <div className="flex flex-col items-center space-y-2 hover:scale-110 transition">
          <FaBroom className="text-3xl logoText" />
          <span className="text-sm font-medium text-gray-700">Tägliche Reinigung</span>
        </div>
      </div>

      {/* Modal مع أسهم ووصف */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-gray-300"
            onClick={() => setSelectedIndex(null)}
          >
            ×
          </button>

          {/* زر السابق */}
          <button
            className="absolute left-6 text-white text-4xl font-bold hover:text-gray-300"
            onClick={handlePrev}
          >
            ‹
          </button>

          {/* الصورة المكبرة */}
          <div className="relative text-center">
            <img
              src={IMAGES[selectedIndex].src}
              alt={`Zoomed ${selectedIndex}`}
              className="max-w-[90vw] max-h-[80vh] rounded-2xl shadow-2xl transition-transform duration-500 scale-100 hover:scale-105"
            />
            <p className="mt-4 text-white text-lg font-medium">
              {IMAGES[selectedIndex].desc}
            </p>
          </div>

          {/* زر التالي */}
          <button
            className="absolute right-6 text-white text-4xl font-bold hover:text-gray-300"
            onClick={handleNext}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
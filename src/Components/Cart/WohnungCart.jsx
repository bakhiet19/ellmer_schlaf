import { useState, useRef } from "react";
import { FaHeart, FaWifi, FaBath, FaCar, FaUmbrellaBeach } from "react-icons/fa";
import Button from "../Button";
import { motion, useInView } from "framer-motion";

function WohnungCart({ wohnung }) {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="logoBGWhite rounded-2xl shadow-lg overflow-hidden hover:scale-[1.05] transition duration-300 relative hover:shadow-2xl"
    >
      {/* ♥️ أيقونة القلب */}
      <div className="absolute top-4 right-4 z-10">
        <button
          className="group logoBGWhite p-2 rounded-full shadow hover:shadow-md transition duration-300 cursor-pointer"
          aria-label="Favorit"
        >
          <FaHeart className="text-black group-hover:text-red-500 text-xl transition duration-300 group-active:scale-110" />
        </button>
      </div>

      {/* 🖼️ الصورة الرئيسية */}
      <img
        src={wohnung.img[currentImgIdx]}
        alt={wohnung.title}
        className="cursor-pointer w-full h-48 object-cover transition-opacity duration-300"
      />

      {/* 🖼️ شريط الصور المصغرة */}
      <div className="flex gap-2 px-4 py-2 overflow-x-auto">
        {wohnung.img.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`thumb-${idx}`}
            onClick={() => setCurrentImgIdx(idx)}
            className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
              currentImgIdx === idx ? "borderRed" : "border-transparent"
            }`}
          />
        ))}
      </div>

      {/* 📋 محتوى البطاقة */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          {wohnung.title}
        </h3>

        {/* وسوم السعر والموقع */}
        <div className="flex gap-2 mb-3">
  <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
    {wohnung.price}
  </span>
  <span className="bg-green-100 text-green-800 text-xs font-medium px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
    {wohnung.location}
  </span>
</div>

        {/* ⭐ ميزات الشقة */}
        <div className="flex flex-wrap gap-3 mt-4 text-gray-600 text-sm">
          {wohnung.features?.wifi && (
            <div className="flex items-center gap-1">
              <FaWifi className="logoText h-4 w-4" />
              <span>Wi-Fi</span>
            </div>
          )}
          {wohnung.features?.bath && (
            <div className="flex items-center gap-1">
              <FaBath className="logoText h-4 w-4" />
              <span>Bad</span>
            </div>
          )}
          {wohnung.features?.balcony && (
            <div className="flex items-center gap-1">
              <FaUmbrellaBeach className="logoText h-4 w-4" />
              <span>Balkon</span>
            </div>
          )}
          {wohnung.features?.parking && (
            <div className="flex items-center gap-1">
              <FaCar className="logoText h-4 w-4" />
              <span>Parkplatz</span>
            </div>
          )}
        </div>

        {/* الأزرار */}
       <div className="flex justify-between mt-6">
  <Button styles="logoBG text-[10px] px-4 py-2 sm:text-sm md:px-4 md:py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer logoTextWhite">
    Details ansehen
  </Button>
  <Button styles="bg-indigo-800 text-[10px] px-4 py-2 sm:text-sm md:px-4 md:py-2 rounded-lg transition cursor-pointer logoTextWhite">
    Angebot anfordern
  </Button>
</div>
      </div>
    </motion.div>
  );
}

export default WohnungCart;

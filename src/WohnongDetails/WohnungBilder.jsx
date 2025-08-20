import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import wohnung1 from "../assets/wohnung1.jpg";
import wohnung2 from "../assets/wohnung2.jpeg";
import wohnung3 from "../assets/wohnung3.jpeg";
import wohnung4 from "../assets/wohnung4.jpg";
import { Pagination, Navigation, Keyboard, A11y } from "swiper/modules";
import { useEffect, useState } from "react";

const WohnungBilder = () => {
  const IMAGES = [
    wohnung1, wohnung2, wohnung3, wohnung4,
    wohnung1, wohnung2, wohnung3, wohnung4,
    wohnung1, wohnung2, wohnung3, wohnung4
  ];

  const BIG_IMAGES = IMAGES.slice(0, 2);
  const SMALL_IMAGES = IMAGES.slice(2, 6);
  const [selectedIndex, setSelectedIndex] = useState(null);
 

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="space-y-6">
    
      {/* صور كبيرة داخل سلايدر */}
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

      {/* صور صغيرة في شبكة */}
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
                      {IMAGES.map((img, idx) => (
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

export default WohnungBilder;
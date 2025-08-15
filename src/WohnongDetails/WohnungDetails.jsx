import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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

const BIG_IMAGES = IMAGES.slice(0, 2);     // صورتين كبار للـ Swiper
const SMALL_IMAGES = IMAGES.slice(2, 6);   // 4 صور صغيرة
const ALL_IMAGES = IMAGES;                 // للـ Lightbox

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
      <div className="flex justify-center">
        <div className="w-full max-w-[1200px] space-y-8">

          {/* السطر الأول: Swiper لصورتين كبار */}
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

          {/* السطر الثاني: 4 صور صغيرة */}
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
        </div>
      </div>

      {/* Lightbox مع Swiper داخلي */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center"
        >
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
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt={`Zoomed ${idx}`}
                    className="max-w-full max-h-[95vh] object-contain rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.6)]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      {/* النص في وسط الشاشة */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-full max-w-[1200px] px-4">
          <h2 className="logoText text-2xl">Lorem, ipsum dolor.</h2>
          <p className="text-gray-800 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga illo magnam eos non eaque earum inventore tempore fugit. Totam, voluptatibus.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis libero pariatur atque assumenda,
             sed alias aliquid voluptatum natus deleniti, adipisci officia facere! Ipsum voluptas tempore labore laudantium cupiditate, quos facilis?</p>
        </div>
        
      </div>
      <AirbnbStyleCalendar />
    </div>
  );
};

export default WohnungDetails;
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// شقق افتراضية للتجريب
import wohnung1 from "../assets/wohnung1.jpg";
import wohnung2 from "../assets/wohnung2.jpeg";
import wohnung3 from "../assets/wohnung3.jpeg";
import wohnung4 from "../assets/wohnung4.jpg";
import hero from "../assets/hero.jpg";
import WohnungCart from "../Components/Cart/WohnungCart";

const baseWohnungen = [
  {
    img: [wohnung1, wohnung2],
    title: "Wohnung A",
    price: "€1,200 / Monat",
    location: "Hamburg, Deutschland",
    features: { wifi: true, bath: true, balcony: true, parking: true },
  },
  {
    img: [wohnung2, wohnung3],
    title: "Wohnung B",
    price: "€950 / Monat",
    location: "Berlin, Deutschland",
    features: { wifi: true, bath: true, balcony: false, parking: true },
  },
  {
    img: [wohnung3, wohnung4],
    title: "Wohnung C",
    price: "€1,050 / Monat",
    location: "Köln, Deutschland",
    features: { wifi: false, bath: true, balcony: true, parking: true },
  },
  {
    img: [wohnung4, hero],
    title: "Wohnung D",
    price: "€1,300 / Monat",
    location: "München, Deutschland",
    features: { wifi: true, bath: true, balcony: false, parking: false },
  },
];

export default function SimilarWohnungen() {
  const prevRefs = useRef([]);
  const nextRefs = useRef([]);

  // مولّد 10 عناصر (مثلاً إقامات مشابهة)
  const generateWohnungen = (count = 10) => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const base = baseWohnungen[i % baseWohnungen.length];
      arr.push({
        ...base,
        title: `${base.title} #${i + 1}`,
      });
    }
    return arr;
  };

  // صفين: واحد للإقامات القريبة – واحد للإقامات المشابهة
  const sections = [
    { title: "Ähnliche Unterkünfte", items: generateWohnungen(10) },
    { title: "Unterkünfte in der Nähe", items: generateWohnungen(10) },
  ];

  return (
    <div className="bg-gray-50 py-10 space-y-16">
      {sections.map((section, idx) => (
        <div key={idx} className=" mx-auto px-4">
          {/* العنوان + الأزرار */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold logoText">{section.title}</h2>
            <div className="flex gap-2">
              <button
                ref={(el) => (prevRefs.current[idx] = el)}
                className="bg-white shadow-md hoverLogoMehr hover:text-white transition text-gray-800 p-3 rounded-full flex items-center justify-center cursor-pointer"
              >
                <FaArrowLeft className="w-4 h-4" />
              </button>
              <button
                ref={(el) => (nextRefs.current[idx] = el)}
                className="bg-white shadow-md hoverLogoMehr hover:text-white transition text-gray-800 p-3 rounded-full flex items-center justify-center cursor-pointer"
              >
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            grabCursor={true}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRefs.current[idx];
              swiper.params.navigation.nextEl = nextRefs.current[idx];
            }}
            navigation
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 5 },
            }}
          >
            {section.items.map((wohnung, i) => (
              <SwiperSlide key={i}>
                <div className="p-2">
                  <WohnungCart wohnung={wohnung} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
}

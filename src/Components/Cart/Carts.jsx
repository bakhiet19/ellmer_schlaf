import React, { useRef } from "react";
import ApartmentMap from "../Map/Map";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import WohnungCart from "./WohnungCart";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import wohnung1 from "../../assets/wohnung1.jpg";
import wohnung2 from "../../assets/wohnung2.jpeg";
import wohnung3 from "../../assets/wohnung3.jpeg";
import wohnung4 from "../../assets/wohnung4.jpg";
import hero from "../../assets/hero.jpg";
import { NavLink } from "react-router-dom";

const baseWohnungen = [
  {
    img: [wohnung1, wohnung2],
    title: "Wohnung",
    price: "ab €25 pro Nacht",
    location: "Hamburg, Deutschland",
    features: { wifi: true, bath: true, balcony: true, parking: true },
  },
  {
    img: [wohnung2, wohnung3],
    title: "Wohnung",
    price: "ab €32 pro Nacht",
    location: "Lübeck, Deutschland",
    features: { wifi: true, bath: true, balcony: false, parking: true },
  },
  {
    img: [wohnung3, wohnung4],
    title: "Wohnung",
    price: "ab €28 pro Nacht",
    location: "Kiel, Deutschland",
    features: { wifi: true, bath: true, balcony: true, parking: false },
  },
  {
    img: [wohnung4, hero],
    title: "Wohnung",
    price: "ab €30 pro Nacht",
    location: "München, Deutschland",
    features: { wifi: true, bath: false, balcony: true, parking: true },
  },
  {
    img: [hero, wohnung2],
    title: "Wohnung",
    price: "ab €27 pro Nacht",
    location: "Berlin, Deutschland",
    features: { wifi: false, bath: true, balcony: true, parking: true },
  },
  {
    img: [wohnung1, wohnung3],
    title: "Wohnung",
    price: "ab €29 pro Nacht",
    location: "Köln, Deutschland",
    features: { wifi: true, bath: true, balcony: false, parking: true },
  },
];

const regions = [
  { title: "Norddeutschland", filter: "Hamburg" },
  { title: "Süddeutschland", filter: "München" },
  { title: "Ostdeutschland", filter: "Berlin" },
  { title: "Westdeutschland", filter: "Köln" },
];

export default function Carts() {
  // مصفوفات الريفس للأزرار (واحد لكل سطر / منطقة)
  const prevRefs = useRef([]);
  const nextRefs = useRef([]);

  // مولّد عناصر: يرجع 'count' عنصر لكل منطقة (نكرر baseWohnungen مع تعديل العنوان واللوكيشن)
  const makeRegionItems = (regionName, count = 30) => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const base = baseWohnungen[i % baseWohnungen.length];
      arr.push({
        ...base,
        // نضيف رقم لعنوان وشوية تغيير باللوكيشن عشان تكون عناصر مميزة
        title: `${base.title} — ${regionName} #${i + 1}`,
        location: `${regionName}, Deutschland`,
      });
    }
    return arr;
  };

  return (
    <div className=" py-8 sm:pb-12 lg:pb-16 px-4 max-w-full mx-auto">
      {/* فلترة + خريطة */}

      <div className="flex justify-center mx-auto mb-10 p-1 md:p-6  rounded-xl shadow w-full h-[80vh]">
      <div className="w-full h-full">
      <ApartmentMap />
      </div>
      </div>

      {/* القوائم حسب المنطقة */}
      <div className="space-y-16">
        {regions.map((region, idx) => {
          // هنا نولّد 30 عنصر لكل منطقة
          const regionItems = makeRegionItems(region.title, 30);

          return (
            <div key={idx} className="ca">
              {/* العنوان + الأزرار */}
            <div className="flex items-center justify-between s:mb-6 mb-2">
          <h2 className="text-md font-bold px-8 py-2 logoTextWhite logoBG hoverLogoMehr rounded-2xl flex items-center ml-4 gap-2">
          <NavLink to={`/${region.title}`} className="flex items-center gap-2">
          {region.title}
          <FaArrowRight />
           </NavLink>
          </h2>

            <div className="flex gap-2">
              <button
                ref={(el) => (prevRefs.current[idx] = el)}
                className="bg-white shadow-md hoverLogoMehr hover:text-white transition text-gray-800 p-3 rounded-full flex items-center justify-center cursor-pointer"
                aria-label={`prev-${idx}`}
              >
                <FaArrowLeft className="w-4 h-4" />
              </button>

              <button
                ref={(el) => (nextRefs.current[idx] = el)}
                className="bg-white shadow-md hoverLogoMehr hover:text-white transition text-gray-800 p-3 rounded-full flex items-center justify-center cursor-pointer"
                aria-label={`next-${idx}`}
              >
                <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
            </div>

              {/* Swiper — نربط الأزرار عبر onBeforeInit */}
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                grabCursor={true}
                onBeforeInit={(swiper) => {
                  // ربط عناصر الـ navigation بالأزرار المناسبة
                  // (prevRefs.current[idx] و nextRefs.current[idx] موجودين لأن الأزرار رُسمت قبل الـ Swiper)
                  swiper.params.navigation.prevEl = prevRefs.current[idx];
                  swiper.params.navigation.nextEl = nextRefs.current[idx];
                }}
                navigation // نترك الـ navigation فعلية (سيأخذ القيم اللي وضعناها في onBeforeInit)
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 },
                  1600: { slidesPerView: 5 },
                }}
              >
                {regionItems.map((wohnung, i) => (
                  <SwiperSlide key={i}>
                    <div className="p-2">
                      <WohnungCart wohnung={wohnung} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          );
        })}
      </div>
    </div>
  );
}

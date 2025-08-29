import React, { useRef } from "react";
import FilterSection from "./Filter/FiltersSection";
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
    price: "€1,200 / Monat",
    location: "Hamburg, Deutschland",
    features: { wifi: true, bath: true, balcony: true, parking: true },
  },
  {
    img: [wohnung2, wohnung3],
    title: "Wohnung",
    price: "€950 / Monat",
    location: "Lübeck, Deutschland",
    features: { wifi: true, bath: true, balcony: false, parking: true },
  },
  {
    img: [wohnung3, wohnung4],
    title: "Wohnung",
    price: "€1,050 / Monat",
    location: "Kiel, Deutschland",
    features: { wifi: true, bath: true, balcony: true, parking: false },
  },
  {
    img: [wohnung4, hero],
    title: "Wohnung",
    price: "€1,200 / Monat",
    location: "München, Deutschland",
    features: { wifi: true, bath: false, balcony: true, parking: true },
  },
  {
    img: [hero, wohnung2],
    title: "Wohnung",
    price: "€950 / Monat",
    location: "Berlin, Deutschland",
    features: { wifi: false, bath: true, balcony: true, parking: true },
  },
  {
    img: [wohnung1, wohnung3],
    title: "Wohnung",
    price: "€1,200 / Monat",
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
    <div className="bg-gray-50 py-8 sm:pb-12 lg:pb-16 px-4 max-w-full mx-auto">
      {/* فلترة + خريطة */}

      <div className="flex justify-center mx-auto mb-10 p-1 md:p-6 bg-gray-50 rounded-xl shadow w-full h-[80vh]">
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
            <div key={idx}>
              {/* العنوان + الأزرار */}
            <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold logoText px-8"> <NavLink to={`/${region.title}`}>{region.title}</NavLink> </h2>

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
                  1280: { slidesPerView: 5 },
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

{/* 
      <div className="flex flex-col md:flex-row mx-auto mb-10 p-1 md:p-6 bg-gray-50 rounded-xl shadow gap-6">
      <div className="w-full md:w-1/3 space-y-6 min-h-[65vh]">
       <FilterSection />
      </div>
    <div className="w-full md:w-2/3 flex">
    <div className="w-full h-[65vh] md:h-full">
      <ApartmentMap />
    </div>
  </div>
      </div> */}
import { useRef } from "react";
import {
  FaWifi,
  FaBath,
  FaCar,
  FaUmbrellaBeach,
  FaTv,
  FaUtensils,
  FaDog,
  FaFire,
  FaEye,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import Button from "../Button";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

function WohnungCart({ wohnung }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const swiperRef = useRef(null);

  // إعداد الصور
  const images =
    wohnung.img.length >= 5
      ? wohnung.img.slice(0, 5)
      : [...wohnung.img, ...wohnung.img].slice(0, 5);

  // الميزات
  const allFeatures = [
    wohnung.features?.wifi && { icon: <FaWifi className="text-indigo-600" />, label: "Wi-Fi" },
    wohnung.features?.bath && { icon: <FaBath className="text-indigo-600" />, label: "Bad" },
    wohnung.features?.balcony && { icon: <FaUmbrellaBeach className="text-indigo-600" />, label: "Balkon" },
    wohnung.features?.parking && { icon: <FaCar className="text-indigo-600" />, label: "Parkplatz" },
    { icon: <FaTv className="text-indigo-600" />, label: "TV" },
    { icon: <FaUtensils className="text-indigo-600" />, label: "Küche" },
    { icon: <FaDog className="text-indigo-600" />, label: "Haustiere erlaubt" },
    { icon: <FaFire className="text-indigo-600" />, label: "Heizung" },
  ].filter(Boolean);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.03] transition-all duration-300 relative"
    >
      {/* 🖼️ صور الشقة بسلايدر */}
      <div className="relative w-full h-52">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          navigation={{
            prevEl: null,
            nextEl: null,
          }}
          pagination={{ clickable: true }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          className="w-full h-52"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <motion.img
                src={img}
                alt={`${wohnung.title}-${idx}`}
                className="w-full h-52 object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* الأسهم داخل المربع */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute top-1/2 left-2 -translate-y-1/2 z-10 logoTextWhite bg-black/30 p-2 rounded-full"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute top-1/2 right-2 -translate-y-1/2 z-10 logoTextWhite bg-black/30 p-2 rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* 📋 محتوى البطاقة */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
          {wohnung.title}
        </h3>

        {/* السعر */}
        <div className="flex justify-start mb-4">
          <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full shadow-sm">
            {wohnung.price}
          </span>
        </div>

        {/* ⭐ الميزات (محدودة بـ 3) */}
        <div className="flex flex-wrap justify-start gap-2 mt-2 text-gray-700 text-sm">
          {allFeatures.slice(0, 3).map((feat, idx) => (
            <span
              key={idx}
              className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full"
            >
              {feat.icon} {feat.label}
            </span>
          ))}
          {allFeatures.length > 3 && (
            <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
              +{allFeatures.length - 3}
            </span>
          )}
        </div>

        {/* الأزرار */}
        <div className="flex justify-between mt-6 gap-3">
          <Button styles="logoBG hoverLogoMehr text-sm px-4 py-2 rounded-full logoTextWhite flex items-center gap-2 transition cursor-pointer">
            <FaEye /> Details
          </Button>
          <Button styles="bg-indigo-600 hover:bg-indigo-700 text-sm px-4 py-2 rounded-full logoTextWhite flex items-center gap-2 transition cursor-pointer">
            <FaEnvelope /> Anfrage
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default WohnungCart;

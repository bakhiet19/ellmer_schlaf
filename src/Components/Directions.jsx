// src/App.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";   // ✅ CSS الخاص بالـ pagination
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // ✅ استيراد

import m from '../assets/städte/m.jpg';
import berlin1 from '../assets/städte/berlin1.jpg';
import hamburg from '../assets/städte/hamburg.jpg';
import koln from '../assets/städte/koln.jpg';
import leipzig from '../assets/städte/leipzig.jpg';
import dresden from '../assets/städte/dresden.jpg';
import bonn from '../assets/städte/bonn.jpg';
import frankfurt from '../assets/städte/frankfurt.jpg';
import kiel from '../assets/städte/kiel.jpg';
import lubeck from '../assets/städte/lubeck.jpg';
import mannheim from '../assets/städte/mannheim.jpg';
import stuttgart from '../assets/städte/stuttgart.jpg';
import heidelberg from '../assets/städte/heidelberg.jpg';
import rostock from '../assets/städte/rostock.jpg';
import dusseldorf from '../assets/städte/dusseldorf.jpg';
import potsdam from '../assets/städte/potsdam.jpg';


const regions = [
  { 
    title: 'Norddeutschland',
    description: 'Küstenstädte und maritime Atmosphäre',
    price: 'ab 15 € pro Nacht',
    cities: [
      { name: 'Hamburg', img: hamburg },
      { name: 'Kiel', img: kiel },
      { name: 'Lübeck', img: lubeck },
      { name: 'Rostock', img: rostock },
    ]
  },
  { 
    title: 'Süddeutschland',
    description: 'Natur, Berge und historische Städte',
    price: 'ab 15 € pro Nacht',
    cities: [
      { name: 'München', img: m },
      { name: 'Stuttgart', img: stuttgart },
      { name: 'Mannheim', img: mannheim },
      { name: 'Heidelberg', img: heidelberg },
    ]
  },
  { 
    title: 'Ostdeutschland',
    description: 'Kultur, Geschichte und Vielfalt',
    price: 'ab 15 € pro Nacht',
    cities: [
      { name: 'Berlin', img: berlin1 },
      { name: 'Dresden', img: dresden },
      { name: 'Leipzig', img: leipzig },
      { name: 'Potsdam', img: potsdam },
    ]
  },
  { 
    title: 'Westdeutschland',
    description: 'Industrie, Rhein und pulsierende Städte',
    price: 'ab 15 € pro Nacht',
    cities: [
      { name: 'Köln', img: koln },
      { name: 'Bonn', img: bonn },
      { name: 'Frankfurt', img: frankfurt },
      { name: 'Düsseldorf', img: dusseldorf },
    ]
  },
];

const RegionCard = ({ title, description, price, cities }) => (
  <div className="logoBGWhite rounded-2xl shadow-lg overflow-hidden transform hover:shadow-2xl transition duration-300 flex flex-col">
    {/* Swiper للصور */}
    <Swiper
      navigation
      pagination={{ clickable: true }}  // ✅ pagination
      autoplay={{ delay: 6000, disableOnInteraction: false }} // ✅ autoplay
      modules={[Navigation, Pagination, Autoplay]} // ✅
      className="h-[40vh] w-full"
    >
      {cities.map((city, i) => (
        <SwiperSlide key={i}>
          <div className="relative h-full w-full">
            <img src={city.img} alt={city.name} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/40 logoTextWhite text-sm p-2">
              {city.name}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* معلومات المنطقة */}
    <div className="p-5 flex-1 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold logoText mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <span className="inline-block bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
          {price}
        </span>
      </div>
      <div className="mt-4 flex gap-2">
        <button className="flex-1 logoBG hoverLogoMehr logoTextWhite py-2 rounded-lg text-sm font-semibold cursor-pointer">
          Städte anzeigen
        </button>
        <button className="flex-1 bg-blue-500 hover:bg-blue-600 logoTextWhite py-2 rounded-lg text-sm font-semibold cursor-pointer">
          Anfrage
        </button>
      </div>
    </div>
  </div>
);

export default function Directions() {
  return (
    <div className="min-h-[60vh] bg-gradient-to-br from-gray-100 to-gray-200 p-6">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        {regions.map((region, index) => (
          <RegionCard key={index} {...region} />
        ))}
      </div>
    </div>
  );
}

import { useState } from 'react';
import wohnung1 from '../../assets/wohnung1.jpg';
import wohnung2 from '../../assets/wohnung2.jpeg';
import wohnung3 from '../../assets/wohnung3.jpeg';
import wohnung4 from '../../assets/wohnung4.jpg';
import hero from '../../assets/hero.jpg';
import FilterSection from './Filter/FiltersSection';
import Button from '../Button';
import ApartmentMap from '../Map/Map';
import { FaHeart } from 'react-icons/fa';

const wohnungen = [
  {
    img: [wohnung1, wohnung2],
    title: 'Wohnung in Hamburg',
    price: '€1,200 / Monat',
    location: 'Hamburg, Deutschland',
  },
  {
    img: [wohnung2, wohnung3],
    title: 'Wohnung in Lübeck',
    price: '€950 / Monat',
    location: 'Lübeck, Deutschland',
  },
  {
    img: [wohnung3, wohnung4],
    title: 'Wohnung in Kiel',
    price: '€1,050 / Monat',
    location: 'Kiel, Deutschland',
  },
  {
    img: [wohnung4, hero],
    title: 'Wohnung in Hamburg',
    price: '€1,200 / Monat',
    location: 'Hamburg, Deutschland',
  },
  {
    img: [hero, wohnung2],
    title: 'Wohnung in Lübeck',
    price: '€950 / Monat',
    location: 'Lübeck, Deutschland',
  },
  {
    img: [wohnung1, wohnung3],
    title: 'Wohnung in Hamburg',
    price: '€1,200 / Monat',
    location: 'Hamburg, Deutschland',
  },
  {
    img: [wohnung4, wohnung1],
    title: 'Wohnung in Lübeck',
    price: '€950 / Monat',
    location: 'Lübeck, Deutschland',
  },
  {
    img: [wohnung2, hero],
    title: 'Wohnung in Kiel',
    price: '€1,050 / Monat',
    location: 'Kiel, Deutschland',
  },
];

function WohnungCard({ wohnung }) {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  return (
    <div className="logoBGWhite rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition duration-300 relative">
      {/* ♥️ أيقونة القلب */}
     <div className="absolute top-4 right-4 z-10">
  <button
    className="group logoBGWhite p-2 rounded-full shadow hover:shadow-md transition duration-300 cursor-pointer"
    aria-label="Favorit"
  >
    <FaHeart className="text-gray-400 group-hover:text-red-500 text-xl transition duration-300 group-active:scale-110" />
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
            className={` w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
              currentImgIdx === idx ? 'borderRed' : 'border-transparent'
            }`}
          />
        ))}
      </div>

      {/* 📋 محتوى البطاقة */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{wohnung.title}</h3>

        {/* وسوم السعر والموقع */}
        <div className="flex gap-2 mb-3">
          <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-1 rounded-full">
            {wohnung.price}
          </span>
          <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
            {wohnung.location}
          </span>
        </div>

        <Button styles="logoBG text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer">
          Details ansehen
        </Button>
      </div>
    </div>
  );
}

export default function Carts() {
  return (
    <div className="bg-gray-100 py-8 sm:pb-12 lg:pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* الفلاتر والخريطة */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl mx-auto mb-10 p-4 md:p-6 bg-gray-50 rounded-xl shadow space-y-8 md:space-y-0 md:gap-8">
          <FilterSection />
          <ApartmentMap />
        </div>

        {/* الكروت */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wohnungen.map((wohnung, index) => (
            <WohnungCard key={index} wohnung={wohnung} />
          ))}
        </div>
      </div>
    </div>
  );
}
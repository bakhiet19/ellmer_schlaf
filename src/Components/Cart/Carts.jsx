import { useState } from 'react';
import wohnung1 from '../../assets/wohnung1.jpg';
import wohnung2 from '../../assets/wohnung2.jpeg';
import wohnung3 from '../../assets/wohnung3.jpeg';
import wohnung4 from '../../assets/wohnung4.jpg';
import hero from '../../assets/hero.jpg';
import CartLogo from './CartLogo';
import FilterSection from './FiltersSection';
import Button from '../Button';

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
  const [isFading, setIsFading] = useState(false);

  const switchImage = (direction) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentImgIdx((prev) => {
        const total = wohnung.img.length;
        return direction === 'next'
          ? (prev + 1) % total
          : (prev - 1 + total) % total;
      });
      setIsFading(false);
    }, 200);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition duration-300 relative">
      {/* ♥️ أيقونة القلب */}
      <div className="absolute top-4 right-4 z-10 cursor-pointer">
        <div className="bg-white px-2 p-1 rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <button className="text-red-300 hover:text-red-700 text-3xl cursor-pointer">♥</button>
        </div>
      </div>

      {/* 🖼️ الصورة المتغيرة مع تأثير Fade */}
      <img
        src={wohnung.img[currentImgIdx]}
        alt={wohnung.title}
        className={`w-full h-40 sm:h-56 object-cover transition-opacity duration-300 ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* ◀▶ أسهم التنقل بين الصور */}
      {wohnung.img.length > 1 && (
        <>
          <button
            onClick={() => switchImage('prev')}
            className="absolute left-3 top-1/4 transform -translate-y-1/2 text-white text-5xl hover:scale-110 transition duration-800 z-10"
            aria-label="السابق"
          >
            ‹
          </button>

          <button
            onClick={() => switchImage('next')}
            className="absolute right-3 top-1/4 transform -translate-y-1/2 text-white text-5xl hover:scale-110 transition duration-800 z-10"
            aria-label="التالي"
          >
            ›
          </button>
        </>
      )}

      {/* 📋 محتوى البطاقة */}
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl text-red-500 mb-2">{wohnung.title}</h3>
        <p className="text-sm sm:text-base text-indigo-600 font-semibold mb-1">{wohnung.price}</p>
        <p className="text-xs sm:text-sm text-gray-500 mb-4">{wohnung.location}</p>

        <Button styles="bg-red-500 text-white text-sm sm:text-base px-3 py-2 rounded-lg hover:bg-red-600 transition duration-300 cursor-pointer">
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
        {/* <CartLogo /> */}
        <FilterSection />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {wohnungen.map((wohnung, index) => (
            <WohnungCard key={index} wohnung={wohnung} />
          ))}
        </div>
      </div>
    </div>
  );
}
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

export default function Carts() {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <CartLogo />
        <FilterSection />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {wohnungen.map((wohnung, index) => {
            const [currentImgIdx, setCurrentImgIdx] = useState(0);

            const nextImage = () => {
              setCurrentImgIdx((prev) =>
                (prev + 1) % wohnung.img.length
              );
            };

            const prevImage = () => {
              setCurrentImgIdx((prev) =>
                (prev - 1 + wohnung.img.length) % wohnung.img.length
              );
            };

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition duration-300 relative"
              >
                {/* ♥️ أيقونة القلب */}
                <div className="absolute top-4 right-4 z-10 cursor-pointer">
                  <div className="bg-white px-2 p-1 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                    <button className="text-red-300 hover:text-red-700 text-3xl cursor-pointer">
                      ♥
                    </button>
                  </div>
                </div>

                {/* 🖼️ الصورة المتغيرة */}
                <img
                  src={wohnung.img[currentImgIdx]}
                  alt={wohnung.title}
                  className="w-full h-56 object-cover transition duration-300"
                />

                {/* ◀▶ أسهم التنقل بين الصور */}
               {wohnung.img.length > 1 && (
                  <>
                    {/* ◀ السهم السابق */}
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/4 transform -translate-y-1/2 text-white text-5xl hover:scale-110 transition duration-800 z-10"
                      aria-label="السابق"
                    >
                      ‹
                    </button>

                    {/* ▶ السهم التالي */}
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/4 transform -translate-y-1/2 text-white text-5xl hover:scale-110 transition duration-800 z-10"
                      aria-label="التالي"
                    >
                      ›
                    </button>
                  </>
                )}


                {/* 📋 محتوى البطاقة */}
                <div className="p-6">
                  <h3 className="text-xl text-red-500 mb-2">{wohnung.title}</h3>
                  <p className="text-indigo-600 font-semibold mb-1">{wohnung.price}</p>
                  <p className="text-gray-500 text-sm mb-4">{wohnung.location}</p>

                  <Button styles="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 cursor-pointer">
                    Details ansehen
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import Button from '../Button';

// const wohnungen = [
//   {
//     img: [wohnung1, wohnung2],
//     title: 'Wohnung in Hamburg',
//     price: '€1,200 / Monat',
//     location: 'Hamburg, Deutschland',
//   },
//   {
//     img: [wohnung2, wohnung3],
//     title: 'Wohnung in Lübeck',
//     price: '€950 / Monat',
//     location: 'Lübeck, Deutschland',
//   },
//   {
//     img: [wohnung3, wohnung4],
//     title: 'Wohnung in Kiel',
//     price: '€1,050 / Monat',
//     location: 'Kiel, Deutschland',
//   },
//   {
//     img: [wohnung4, hero],
//     title: 'Wohnung in Hamburg',
//     price: '€1,200 / Monat',
//     location: 'Hamburg, Deutschland',
//   },
//   {
//     img: [hero, wohnung2],
//     title: 'Wohnung in Lübeck',
//     price: '€950 / Monat',
//     location: 'Lübeck, Deutschland',
//   },
//   {
//     img: [wohnung1, wohnung3],
//     title: 'Wohnung in Hamburg',
//     price: '€1,200 / Monat',
//     location: 'Hamburg, Deutschland',
//   },
//   {
//     img: [wohnung4, wohnung1],
//     title: 'Wohnung in Lübeck',
//     price: '€950 / Monat',
//     location: 'Lübeck, Deutschland',
//   },
//   {
//     img: [wohnung2, hero],
//     title: 'Wohnung in Kiel',
//     price: '€1,050 / Monat',
//     location: 'Kiel, Deutschland',
//   },
// ];


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
    <FaHeart className="text-black group-hover:text-red-500 text-xl transition duration-300 group-active:scale-110" />
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

        <div className='flex justify-between mt-2'>
          <Button styles="logoBG text-white text-sm px-4 py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer">Details ansehen</Button>
          <Button styles="bg-indigo-800 text-white text-sm px-4 py-2 rounded-lg  transition cursor-pointer">Angebot anfordern</Button>
        </div>
      </div>
    </div>
  );
}

export default WohnungCard
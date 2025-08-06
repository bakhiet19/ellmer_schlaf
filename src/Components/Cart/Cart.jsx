import wohnung1 from '../../assets/wohnung1.jpg';
import wohnung2 from '../../assets/wohnung2.jpeg';
import wohnung3 from '../../assets/wohnung3.jpeg';
import wohnung4 from '../../assets/wohnung4.jpg';
import hero from '../../assets/hero.jpg';
import Cities from './Cities';
import PriceSlider from './PreisFilterInput';
import FilterSection from './FiltersSection';
import { useQuery } from '@tanstack/react-query';
// import wohnung6 from '../../assets/wohnung6.jpeg';

const wohnungen = [
  {
    img: wohnung1,
    title: 'Wohnung in Hamburg',
    price: '€1,200 / Monat',
    location: 'Hamburg, Deutschland',
  },
  {
    img: wohnung2,
    title: 'Wohnung in Lübeck',
    price: '€950 / Monat',
    location: 'Lübeck, Deutschland',
  },
  {
    img: wohnung3,
    title: 'Wohnung in Kiel',
    price: '€1,050 / Monat',
    location: 'Kiel, Deutschland',
  },
  {
    img: wohnung4,
    title: 'Wohnung in Hamburg',
    price: '€1,200 / Monat',
    location: 'Hamburg, Deutschland',
  },
  {
    img: hero,
    title: 'Wohnung in Lübeck',
    price: '€950 / Monat',
    location: 'Lübeck, Deutschland',
  },
//   {
//     img: wohnung6,
//     title: 'Wohnung in Kiel',
//     price: '€1,050 / Monat',
//     location: 'Kiel, Deutschland',
//   },
  {
    img: wohnung1,
    title: 'Wohnung in Hamburg',
    price: '€1,200 / Monat',
    location: 'Hamburg, Deutschland',
  },
  {
    img: wohnung4,
    title: 'Wohnung in Lübeck',
    price: '€950 / Monat',
    location: 'Lübeck, Deutschland',
  },
  {
    img: wohnung2,
    title: 'Wohnung in Kiel',
    price: '€1,050 / Monat',
    location: 'Kiel, Deutschland',
  },
];

export default function Cart() {


  // const {data , isLoading , mu} = useQuery({
  //   queryFn : 
    
  // })



  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
        
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
      🏠 Unsere Unterkünften
    </h2>
        <FilterSection />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {wohnungen.map((wohnung, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 relative"
        >
          {/* ❤️ أيقونة القلب */}
          <div className="absolute top-4 right-4 z-10 cursor-pointer">
                <div className="bg-white px-2 p-1 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <button className="text-red-300 hover:text-red-700 transition-colors duration-300 text-3xl cursor-pointer">
                    ♥
                    </button>
                </div>
                </div>
          <img
            src={wohnung.img}
            alt={wohnung.title}
            className="w-full h-56 object-cover"
          />

          <div className="p-6">
            <h3 className="text-xl text-red-500 mb-2">{wohnung.title}</h3>
            <p className="text-indigo-600 font-semibold mb-1">
              {wohnung.price}
            </p>
            <p className="text-gray-500 text-sm mb-4">{wohnung.location}</p>

            {/* 🔘 زر التفاصيل */}
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300 cursor-pointer">
              Details ansehen
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  );
}
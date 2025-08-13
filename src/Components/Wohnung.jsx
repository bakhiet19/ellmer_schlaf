import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import wohnung1 from '../assets/wohnung1.jpg';
import wohnung2 from '../assets/wohnung2.jpeg';
import wohnung3 from '../assets/wohnung3.jpeg';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// 🏙️ بيانات المدن والعقارات
const wohnungen = [
  {
    img: wohnung1,
    position: [53.5511, 9.9937], // Hamburg
    title: 'Wohnung in Hamburg',
  },
  {
    img: wohnung2,
    position: [53.8651, 10.6875], // Lübeck
    title: 'Wohnung in Lübeck',
  },
  {
    img: wohnung3,
    position: [54.3233, 10.1228], // Kiel
    title: 'Wohnung in Kiel',
  },
];

export default function Wohnung() {
  const [currentWohnung, setCurrentWohnung] = useState(wohnungen[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl p-8 flex flex-col lg:flex-row flex-wrap gap-10">
        
        {/* 🖼️ Swiper Section */}
        <div className="flex-1 min-w-0">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            {currentWohnung.title}
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={(swiper) => setCurrentWohnung(wohnungen[swiper.activeIndex])}
          >
            {wohnungen.map((wohnung, index) => (
              <SwiperSlide key={index}>
                <div className="aspect-[4/3] bg-gray-100 p-4 rounded-xl shadow-lg">
                  <img
                    src={wohnung.img}
                    alt={wohnung.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 🗺️ Map Section */}
        <div className="flex-1 min-w-0">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
            Standort: {currentWohnung.title}
          </h2>
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <MapContainer
              center={currentWohnung.position}
              zoom={10}
              scrollWheelZoom={false}
              className="h-full w-full"
              key={currentWohnung.title}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={currentWohnung.position}>
                <Popup className='logoText'>{currentWohnung.title}</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
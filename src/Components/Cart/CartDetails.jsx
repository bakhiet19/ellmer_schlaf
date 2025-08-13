import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import wohnung1 from '../../assets/wohnung1.jpg';
import wohnung2 from '../../assets/wohnung2.jpeg';
import wohnung3 from '../../assets/wohnung3.jpeg';
import wohnung4 from '../../assets/wohnung4.jpg';
import Navbar from '../Navbar/Navbar';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';
import Footer from '../Footer';

// إصلاح أيقونة الماركر
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const ApartmentDetails = () => {
  const [modalImage, setModalImage] = useState(null);

  const apartment = {
    name: 'Luxuswohnung im Stadtzentrum',
    city: 'Hamburg, Deutschland',
    images: [wohnung1, wohnung2, wohnung3, wohnung4],
    rooms: 3,
    bathrooms: 2,
    area: '120 m²',
    price: '1.200€ / Monat',
    description:
      'Moderne Wohnung mit großem Balkon, viel Tageslicht und direkter Nähe zu öffentlichen Verkehrsmitteln und Einkaufsmöglichkeiten.',
    lat: 53.5511,
    lng: 9.9937,
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen font-sans p-6 my-20">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl p-8 space-y-10">
          {/* Galerie + Karte جنباً إلى جنب */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Swiper Galerie */}
            <div>
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                className="rounded-xl overflow-hidden shadow-md"
              >
                {apartment.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Bild ${index + 1}`}
                      className="w-full h-[400px] object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                      onClick={() => setModalImage(img)}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Karte */}
            <div className="rounded-xl overflow-hidden shadow-md ring-1 ring-gray-300 z-0">
              <MapContainer
                center={[apartment.lat, apartment.lng]}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: '100%', minHeight: '400px', width: '100%' }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[apartment.lat, apartment.lng]} />
              </MapContainer>
            </div>
          </section>

          {/* Titel */}
          <header className="space-y-2 border-b border-b-red-500 pb-4">
            <h1 className="text-4xl font-bold text-gray-900 tracking-wide">
              {apartment.name}
            </h1>
            <p className="text-lg text-gray-600">📍 {apartment.city}</p>
          </header>

          {/* Details */}
       <section className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
  {/* تفاصيل الشقة */}
  <div>
    <h2 className="text-xl font-semibold text-gray-800 tracking-wide mb-4">
      🧭 Wohnung Details
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        { icon: '🛏️', label: 'Zimmer', value: apartment.rooms },
        { icon: '🛁', label: 'Badezimmer', value: apartment.bathrooms },
        { icon: '📐', label: 'Fläche', value: apartment.area },
        { icon: '💰', label: 'Preis', value: apartment.price },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition flex items-center gap-2"
        >
          <span className="text-xl">{item.icon}</span>
          <span className="font-medium text-gray-700">
            {item.label}: {item.value}
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* أماكن قريبة */}
  <div>
    <h2 className="text-xl font-semibold text-gray-800 tracking-wide mb-4">
      🧭 Nahe Orte
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        { icon: '🛒', title: 'Supermarkt', time: '5 Min entfernt' },
        { icon: '🏥', title: 'Krankenhaus', time: '10 Min entfernt' },
        { icon: '🚉', title: 'Bahnhof', time: '8 Min entfernt' },
      ].map((place, i) => (
        <div
          key={i}
          className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition flex items-center gap-3"
        >
          <span className="text-2xl">{place.icon}</span>
          <div>
            <p className="font-medium text-gray-700">{place.title}</p>
            <p className="text-sm text-gray-500">{place.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* الوصف */}
  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 md:col-span-2">
    <p className="text-gray-700 leading-relaxed">{apartment.description}</p>
  </div>

  {/* زر الاتصال */}
  <div className="md:col-span-2">
    <button className="logoBG{ text-white px-6 py-3 rounded-full shadow-md hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-300 transition flex items-center gap-3 cursor-pointer">
      Kontakt aufnehmen
      <FaPhone size={18} />
    </button>
  </div>
</section>



        </div>

        {/* Modal für Bild */}
        {modalImage && (
          <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-[999]">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-6 right-6 text-white text-4xl font-bold hover:text-red-400 transition"
              aria-label="Schließen"
            >
              &times;
            </button>
            <img
              loading='lazy'
              src={modalImage}
              alt="Großansicht"
              className="max-w-6xl max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        )}

        {/* زر واتساب عائم */}
        <a
          href="https://wa.me/49123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
        >
          <FaWhatsapp size={24} />
        </a>
       
      </div>
       <Footer />
    </>
  );
};

export default ApartmentDetails;
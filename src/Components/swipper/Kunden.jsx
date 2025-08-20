import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './kunden.css';
import Head from '../Head';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Anna Müller",
    arbeit : 'Software Engineer from UK',
    message: "Finding accommodation for my 6-month contract in Berlin was so easy with airB2B. The apartment had everything I needed, including a proper desk setup for remote work",
    stars : '4'
  },
  {
    name: "Lukas Schmidt",
    arbeit : 'Project Manager from Spain',
    message: "My company used airB2B to find me a place in Munich for my 3-month assignment. The process was smooth and the apartment was exactly as advertised.",
  },
  {
    name: "Mia Schneider",
    arbeit : 'Financial Analyst from USA',
    message: "The monthly discount for my 4-month stay in Frankfurt made a big difference. The location was perfect - just a 10-minute walk to my office.",
  },
   {
    name: "Lukas Schmidt",
    arbeit : 'Project Manager from Spain',
    message: "My company used airB2B to find me a place in Munich for my 3-month assignment. The process was smooth and the apartment was exactly as advertised.",
  },
  {
    name: "Mia Schneider",
    arbeit : 'Financial Analyst from USA',
    message: "The monthly discount for my 4-month stay in Frankfurt made a big difference. The location was perfect - just a 10-minute walk to my office.",
  },
];


export default function Kunden() {
  return (
  <div className='pb-8 sm:pb-12 lg:pb-16'>
  <div className="text-center">
    <Head className='texr-center'>Was unsere Gäste sagen</Head>
  </div>

  <div className="bg-white py-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Swiper
        loop={true}
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10 custom-swiper"
      >
        {testimonials.map((kunde, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 font-bold text-xl">
                    {kunde.name.charAt(0, 2).toUpperCase()}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">{kunde.name}</h4>
                    <p className="text-sm text-gray-600">{kunde.arbeit}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="h-5 w-5 text-yellow-400" />))}
                </div>
                <p className="text-gray-700">{kunde.message}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</div>


  );
}
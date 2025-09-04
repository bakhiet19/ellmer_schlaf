import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Head from "../Head";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Anna Müller",
    arbeit: "Software Engineer from UK",
    message:
      "Finding accommodation for my 6-month contract in Berlin was so easy with airB2B. The apartment had everything I needed, including a proper desk setup for remote work.",
    stars: 4,
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  },
  {
    name: "Lukas Schmidt",
    arbeit: "Project Manager from Spain",
    message:
      "My company used airB2B to find me a place in Munich for my 3-month assignment. The process was smooth and the apartment was exactly as advertised.",
    stars: 5,
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  },
  {
    name: "Mia Schneider",
    arbeit: "Financial Analyst from USA",
    message:
      "The monthly discount for my 4-month stay in Frankfurt made a big difference. The location was perfect - just a 10-minute walk to my office.",
    stars: 5,
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  },
  {
    name: "Jonas Becker",
    arbeit: "Consultant from Italy",
    message:
      "I appreciated the flexibility and quick response from the airB2B team. My temporary stay in Düsseldorf felt like home.",
    stars: 4,
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  },
  {
    name: "Sofia Klein",
    arbeit: "UX Designer from Netherlands",
    message:
      "The apartment was stylish, clean, and close to everything. I’ll definitely use airB2B again for future projects.",
    stars: 5,
    image:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&h=200&w=200",
  },
];

export default function Kunden() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="kunden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <Head className="text-center text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">
            Was unsere Gäste sagen
          </Head>
          <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
            Echte Erfahrungen unserer zufriedenen Kunden
          </p>
        </div>

        <Swiper
          loop={true}
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          
          }}
          className="pb-10"
        >
          {testimonials.map((kunde, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 h-full flex flex-col items-center text-center">
                <img
                  src={kunde.image}
                  alt={kunde.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 shadow-md"
                />
                <h4 className="font-semibold logoText text-lg">{kunde.name}</h4>
                <p className="text-sm text-gray-500 mb-3">{kunde.arbeit}</p>

                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-5 w-5 ${
                        i < (kunde.stars || 5) ? "logoText" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-700 italic leading-relaxed">
                  “{kunde.message}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Kunden.css';

const testimonials = [
  {
    name: "Anna Müller",
    message: "Der Kundenservice war ausgezeichnet. Ich habe mich sehr gut betreut gefühlt.",
  },
  {
    name: "Lukas Schmidt",
    message: "Schnelle Lieferung und top Qualität. Jederzeit wieder!",
  },
  {
    name: "Mia Schneider",
    message: "Die Website ist sehr benutzerfreundlich und schön gestaltet.",
  },
  {
    name: "Tim Becker",
    message: "Ich hatte ein Problem und es wurde sofort gelöst. Super Support!",
  },
  {
    name: "Lea Weber",
    message: "Alles hat reibungslos funktioniert. Sehr professionell!",
  },
];

const Kunden = () => {
  return (
    <div className="testimonial-container">
      <Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  navigation={true}
  pagination={{ clickable: true }}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
    slideShadows: false,
  }}
  breakpoints={{
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  }}
  modules={[EffectCoverflow, Pagination, Navigation]}
  className="mySwiper"
>
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card">
              <p className="message">"{testimonial.message}"</p>
              <p className="name">– {testimonial.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Kunden;

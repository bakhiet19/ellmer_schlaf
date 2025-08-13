import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import wohnung1 from '../assets/wohnung1.jpg';
import wohnung2 from '../assets/wohnung2.jpeg';
import wohnung3 from '../assets/wohnung3.jpeg';
import wohnung4 from '../assets/wohnung4.jpg';


const WohnungDetails = () => {
  const images = [wohnung1, wohnung2, wohnung3, wohnung4, wohnung1];
  const [selectedImage, setSelectedImage] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className='max-w-[90%] mx-auto px-4 py-8'>
      <h2 className='text-3xl font-bold mb-6 text-gray-800'>
        House in Hamburg, Wandsbek Markt
      </h2>

      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className='px-2'>
            <img
              src={img}
              alt={`Wohnung ${index + 1}`}
              onClick={() => setSelectedImage(img)}
              className='w-full h-[280px] object-cover rounded-xl shadow-md cursor-pointer hover:scale-105 transition-transform duration-300'
            />
          </div>
        ))}
      </Slider>

      <p className='mt-8 text-lg text-gray-700 leading-relaxed'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cum deleniti
        quisquam sit tempore, asperiores rerum quis in quibusdam officia.
      </p>

      {/* Modal لتكبير الصورة */}
      {selectedImage && (
        <div
          className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50'
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt='Zoomed Wohnung'
            className='max-w-[90%] max-h-[90%] rounded-lg shadow-xl'
          />
        </div>
      )}
    </div>
  );
};

export default WohnungDetails;
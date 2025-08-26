
import FilterSection from './Filter/FiltersSection';
import Button from '../Button';
import ApartmentMap from '../Map/Map';
import { FaHeart } from 'react-icons/fa';
import WohnungCard from './WohnungCart';
import { useState } from 'react';
import wohnung1 from '../../assets/wohnung1.jpg';
import wohnung2 from '../../assets/wohnung2.jpeg';
import wohnung3 from '../../assets/wohnung3.jpeg';
import wohnung4 from '../../assets/wohnung4.jpg';
import hero from '../../assets/hero.jpg';
import { useQuery } from '@tanstack/react-query';

const wohnungen = [
  {
    img: [wohnung1, wohnung2],
    title: 'Wohnung in Hamburg',
    price: '€1,200 / Monat',
    location: 'Hamburg, Deutschland',
    features: {
      wifi: true,
      bath: true,
      balcony: true,
      parking: true,
    },
  },
  {
    img: [wohnung2, wohnung3],
    title: 'Wohnung in Lübeck',
    price: '€950 / Monat',
    location: 'Lübeck, Deutschland',
    features: {
      wifi: true,
      bath: true,
      balcony: false,
      parking: true,
    },
  },
  {
    img: [wohnung3, wohnung4],
    title: 'Wohnung in Kiel',
    price: '€1,050 / Monat',
    location: 'Kiel, Deutschland',
    features: {
      wifi: true,
      bath: true,
      balcony: true,
      parking: false,
    },
  },
  {
    img: [wohnung4, hero],
    title: 'Wohnung in Hamburg',
    price: '€1,200 / Monat',
    location: 'Hamburg, Deutschland',
    features: {
      wifi: true,
      bath: false,
      balcony: true,
      parking: true,
    },
  },
  {
    img: [hero, wohnung2],
    title: 'Wohnung in Lübeck',
    price: '€950 / Monat',
    location: 'Lübeck, Deutschland',
    features: {
      wifi: false,
      bath: true,
      balcony: true,
      parking: true,
    },
  },
  {
    img: [wohnung1, wohnung3],
    title: 'Wohnung in Hamburg',
    price: '€1,200 / Monat',
    location: 'Hamburg, Deutschland',
    features: {
      wifi: true,
      bath: true,
      balcony: false,
      parking: true,
    },
  },
  {
    img: [wohnung4, wohnung1],
    title: 'Wohnung in Lübeck',
    price: '€950 / Monat',
    location: 'Lübeck, Deutschland',
    features: {
      wifi: true,
      bath: true,
      balcony: true,
      parking: false,
    },
  },
  {
    img: [wohnung2, hero],
    title: 'Wohnung in Kiel',
    price: '€1,050 / Monat',
    location: 'Kiel, Deutschland',
    features: {
      wifi: true,
      bath: false,
      balcony: true,
      parking: true,
    },
  },
  {
    img: [wohnung2, hero],
    title: 'Wohnung in Kiel',
    price: '€1,050 / Monat',
    location: 'Kiel, Deutschland',
    features: {
      wifi: true,
      bath: true,
      balcony: true,
      parking: true,
    },
  },
  {
    img: [wohnung2, hero],
    title: 'Wohnung in Kiel',
    price: '€1,050 / Monat',
    location: 'Kiel, Deutschland',
    features: {
      wifi: false,
      bath: true,
      balcony: false,
      parking: true,
    },
  },
  {
    img: [wohnung1, wohnung3],
    title: 'Wohnung in Hamburg',
    price: '€1,200 / Monat',
    location: 'Hamburg, Deutschland',
    features: {
      wifi: true,
      bath: true,
      balcony: true,
      parking: true,
    },
  },
  {
    img: [hero, wohnung2],
    title: 'Wohnung in Lübeck',
    price: '€950 / Monat',
    location: 'Lübeck, Deutschland',
    features: {
      wifi: true,
      bath: true,
      balcony: true,
      parking: true,
    },
  },
];

export default function Carts() {

  // const {data , isLoading , error} = useQuery({
  //   queryFn : 
  // })


  return (
    <div className="bg-gray-50 py-8 sm:pb-12 lg:pb-16 px-4 max-w-full mx-auto">
       <div className="flex flex-col md:flex-row mx-auto mb-10 p-1 md:p-6 bg-gray-50 rounded-xl shadow gap-6">
  <div className="w-full md:w-1/3 space-y-6">
    <FilterSection />
  </div>
  <div className="w-full md:w-2/3">
    <ApartmentMap />
  </div>
</div>

        {/* الكروت */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {wohnungen.map((wohnung, index) => (
            <WohnungCard key={index} wohnung={wohnung} />
          ))}
        </div>
      </div>
  );
}
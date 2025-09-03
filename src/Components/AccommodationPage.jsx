// src/components/AccommodationPage.jsx
import React from 'react';
import { FaWifi, FaParking, FaUtensils, FaBed } from 'react-icons/fa';
import FeaturesSection from './FeaturesSection';
import { NavLink } from 'react-router-dom';
import Head from './Head';

const features = [
  { icon: <FaBed />, label: 'Komfortable Unterkünfte' },
  { icon: <FaWifi />, label: 'Kostenfreies WLAN' },
  { icon: <FaParking />, label: 'Parkmöglichkeiten am Haus' },
  { icon: <FaUtensils />, label: 'Voll ausgestattete Küche' },
];

const AccommodationPage = () => {
  return (
    <div className="min-h-full logoBGWhite font-sans text-gray-800">
      {/* Header */}
      <header className="logoBG text-white py-16 px-6 text-center shadow-lg">
        <h1 className="text-5xl font-extrabold mb-4">Herzlich willkommen bei ELLMER rooms!</h1>
        <p className="text-md max-w-2xl mx-auto">
         Ob für Projekteinsätze in Monteursunterkünften, Geschäftsreisen in lebendige Metropolen oder Aufenthalte in charmanten Altstädten –
          mit ELLMER rooms finden Sie deutschlandweit immer die passende Unterkunft
        </p>
      </header>

      {/* Features */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <Head className="logoText mb-6 text-center">Unser Service</Head>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <div className="logoText text-3xl mb-3 animate-bounce">{feature.icon}</div>
              <p className="text-center font-medium">{feature.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="logoBGWhite py-10 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
          <div className="logoBGWhite rounded-xl p-6 shadow-xl">
            <p className="text-3xl font-bold logoText">6.000+</p>
            <p className="text-lg text-gray-600 mt-2">Unterkünfte deutschlandweit</p>
          </div>
          <div className="logoBGWhite rounded-xl p-6 shadow-xl">
            <p className="text-3xl font-bold logoText">18.000+</p>
            <p className="text-lg text-gray-600 mt-2">zufriedene Kunden</p>
          </div>
        </div>
      </section>


      

      {/* CTA */}
      <section className="py-12 text-center">
        <button className="logoBG logoTextWhite px-10 py-4 rounded-full text-lg font-semibold shadow-lg hoverLogoMehr transition cursor-pointer">
        <NavLink to='contact'>  Unterkunft finden</NavLink>
        </button>
        <p className="mt-3 text-sm text-gray-500">Jetzt Fragebogen ausfüllen und passende Wohnung entdecken</p>
      </section>
    </div>
  );
};

export default AccommodationPage;
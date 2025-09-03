// src/components/AccommodationPage.jsx
import React from "react";
import { FaWifi, FaParking, FaUtensils, FaBed } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Head from "./Head";

const features = [
  { icon: <FaBed />, label: "Komfortable Unterkünfte" },
  { icon: <FaWifi />, label: "Kostenfreies WLAN" },
  { icon: <FaParking />, label: "Parkmöglichkeiten am Haus" },
  { icon: <FaUtensils />, label: "Voll ausgestattete Küche" },
];

const AccommodationPage = () => {
  return (
    <div className="min-h-full font-sans text-gray-800 bg-gray-50">
      {/* Header */}
      <header className="py-20 px-6 text-center shadow-lg relative overflow-hidden logoBG logoTextWhite">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg animate-fade-in">
          Herzlich willkommen bei <span className="">ELLMER rooms!</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed opacity-90">
          Ob für Projekteinsätze, Geschäftsreisen oder charmante Altstädte – mit ELLMER rooms finden Sie deutschlandweit die passende Unterkunft.
        </p>
      </header>

      {/* Welcome & Introduction Section */}
      <section className="py-16 px-6 mx-auto text-gray-700 leading-relaxed bg-white rounded-2xl shadow-xl mt-[-40px] relative z-10">
        <div className="space-y-5 text-lg text-center">
          <p>Schön, dass Sie uns gefunden haben.</p>
          <p>
            Ob für Projekteinsätze in Monteursunterkünften, Geschäftsreisen in lebendige Metropolen oder
            Aufenthalte in charmanten Altstädten – mit ELLMER rooms finden Sie deutschlandweit immer
            die passende Unterkunft.
          </p>
          <p>
            Unser besonderer Service: Wir bieten nicht nur eigene, komfortabel eingerichtete Unterkünfte
            wie Monteurswohnungen oder Apartments an, sondern vermitteln Ihnen auch individuell
            ausgewählte Fremdunterkünfte. Dabei beraten wir Sie persönlich und finden genau die
            Unterkunft, die zu Ihren Bedürfnissen passt – ein Service, den kein Mitbewerber in dieser Form
            bietet.
          </p>
          <p>
            Mit über <span className="font-semibold text-red-600">6.000 Unterkünften</span> deutschlandweit und mehr als 
            <span className="font-semibold text-red-600">18.000 zufriedenen Kunden</span> sind
            wir Ihr zuverlässiger Partner für eine flexible, preiswerte und unkomplizierte Unterkunftssuche.
          </p>
          <p>
            Egal, ob Sie eine kurze Auszeit planen, geschäftlich unterwegs sind oder längere Zeit eine
            Unterkunft benötigen – bei ELLMER rooms sind Sie bestens aufgehoben.
          </p>
          <p className="font-semibold">Wir freuen uns darauf, Sie schon bald begrüßen zu dürfen!</p>
        </div>

        <div className="mt-10 text-center">
          <NavLink
            to="/wohnung-finden"
            className="inline-block bg-red-600 text-white px-10 py-4 rounded-full text-xl font-semibold shadow-lg hover:bg-red-700 hover:scale-105 transition transform"
          >
            Unterkunft finden
          </NavLink>
          <p className="mt-4 text-sm text-gray-500">Jetzt Fragebogen ausfüllen und passende Wohnung entdecken</p>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-20 px-6 max-w-6xl mx-auto">
        <Head className="logoText mb-10 text-center text-3xl font-bold">Unser Service</Head>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition transform"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 text-red-600 text-3xl mb-4 shadow-inner">
                {feature.icon}
              </div>
              <p className="text-lg font-medium">{feature.label}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Stats Section */}
      {/* <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 text-center">
          <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-200 hover:shadow-xl transition">
            <p className="text-4xl font-extrabold text-red-600">6.000+</p>
            <p className="text-lg text-gray-600 mt-2">Unterkünfte deutschlandweit</p>
          </div>
          <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-200 hover:shadow-xl transition">
            <p className="text-4xl font-extrabold text-red-600">18.000+</p>
            <p className="text-lg text-gray-600 mt-2">zufriedene Kunden</p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AccommodationPage;

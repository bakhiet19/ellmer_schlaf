import React from "react";
import { FaWifi, FaParking, FaUtensils, FaBed } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Head from "./Head";
import HowItWorksSection from "./HowItWorksSection";

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
      <header className="py-16 md:py-20 px-4 md:px-6 text-center shadow-lg relative overflow-hidden logoBG logoTextWhite">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg animate-fade-in">
          Herzlich willkommen bei <span className="">ELLMER rooms!</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-90">
          Ob für Projekteinsätze, Geschäftsreisen oder charmante Altstädte – mit ELLMER rooms finden Sie deutschlandweit die passende Unterkunft.
        </p>
      </header>

      {/* Welcome & Introduction Section */}
      <section className="py-12 md:py-16 px-4 md:px-20 mx-auto text-gray-700 leading-relaxed bg-white shadow-xl mt-[-40px] relative z-10">
        <div className="space-y-5 text-base sm:text-lg text-center">
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
            <span className="font-semibold text-red-600"> 18.000 zufriedenen Kunden</span> sind
            wir Ihr zuverlässiger Partner für eine flexible, preiswerte und unkomplizierte Unterkunftssuche.
          </p>
          <p>
            Egal, ob Sie eine kurze Auszeit planen, geschäftlich unterwegs sind oder längere Zeit eine
            Unterkunft benötigen – bei ELLMER rooms sind Sie bestens aufgehoben.
          </p>
          <p className="font-semibold">Wir freuen uns darauf, Sie schon bald begrüßen zu dürfen!</p>
        </div>

        {/* Schritte Section */}
        <HowItWorksSection />

        {/* CTA */}
        <div className="mt-10 text-center">
          <NavLink
            to="/mieter"
            className="inline-block logoBG logoTextWhite px-6 sm:px-6 py-3 sm:py-3 rounded-full text-sm sm:text-md md:text-lg font-semibold shadow-lg hoverLogoMehr hover:scale-105 transition transform"
          >
            Unterkunft finden
          </NavLink>
          <p className="mt-4 text-xs sm:text-sm text-gray-500">
            Jetzt Fragebogen ausfüllen und passende Wohnung entdecken
          </p>
        </div>
      </section>
    </div>
  );
};

export default AccommodationPage;

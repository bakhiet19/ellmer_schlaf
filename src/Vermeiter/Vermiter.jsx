import React from "react";
import { FaUsers, FaSearch, FaHome } from "react-icons/fa";

function VermieterSection() {
  const handleClick = () => {
    // هون بتحط اللينك اللي بدك تنتقل عليه
    window.location.href = "/vermieter"; 
  };

  return (
    <section className="logoBG text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* العنوان */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Haben Sie eine Unterkunft und möchten sie vermieten?
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          Tragen Sie Ihre Unterkunft bei uns ein und erreichen Sie jeden Monat
          tausende Suchende – mit einer attraktiven und professionellen Präsentation.
        </p>

        {/* المميزات مع الأيقونات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="flex flex-col items-center">
            <FaUsers className="logoTextWhite text-5xl mb-4" />
            <h3 className="font-semibold text-xl">Hohe Auslastung</h3>
            <p className="text-gray-400 mt-2">
              Profitieren Sie von einer guten Auslastung, auch in der Nebensaison.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaSearch className="logoTextWhite text-5xl mb-4" />
            <h3 className="font-semibold text-xl">Tausende Suchende</h3>
            <p className="text-gray-400 mt-2">
              Monatlich erreichen Sie zahlreiche potenzielle Gäste.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <FaHome className="logoTextWhite text-5xl mb-4" />
            <h3 className="font-semibold text-xl">Optimale Präsentation</h3>
            <p className="text-gray-400 mt-2">
              Ihre Unterkunft wird ansprechend und professionell dargestellt.
            </p>
          </div>
        </div>

        {/* الزر */}
        <button
          onClick={handleClick}
          className="logoBGWhite logoText font-semibold px-8 py-3 rounded-lg shadow-lg nurHover transition cursor-pointer"
        >
          Unterkunft eintragen
        </button>
      </div>
    </section>
  );
}

export default VermieterSection;

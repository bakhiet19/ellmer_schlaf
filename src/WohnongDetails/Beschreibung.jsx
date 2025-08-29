import { FaWifi, FaBed, FaBath, FaMapMarkerAlt } from "react-icons/fa";

const Beschreibung = () => {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 px-6 py-8 rounded-2xl shadow-xl space-y-8 border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900">
        Gemütliche Wohnung mit Balkon
      </h2>

      <p className="text-gray-700 text-base leading-relaxed">
        Willkommen in Ihrer stilvollen Oase mitten in Hamburg!  
        Diese helle und gemütliche Wohnung bietet nicht nur ein komfortables Doppelbett und ein modernes Bad,  
        sondern auch einen sonnigen Balkon, auf dem Sie Ihren Morgenkaffee genießen können.  
        Die Einrichtung kombiniert skandinavische Eleganz mit urbanem Flair – perfekt für Paare, Solo-Reisende oder Geschäftsbesuche.  
        WLAN ist blitzschnell, die Lage unschlagbar: Restaurants, Cafés und Sehenswürdigkeiten sind nur wenige Schritte entfernt.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-gray-800">
        <div className="flex items-center gap-3">
          <FaWifi className="text-blue-500 text-xl" />
          <span className="font-semibold">WLAN</span>
        </div>
        <div className="flex items-center gap-3">
          <FaBed className="text-purple-500 text-xl" />
          <span className="font-semibold">Doppelbett</span>
        </div>
        <div className="flex items-center gap-3">
          <FaBath className="text-teal-500 text-xl" />
          <span className="font-semibold">Bad</span>
        </div>
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-red-500 text-xl" />
          <span className="font-semibold">Hamburg</span>
        </div>
      </div>
    </div>
  );
};

export default Beschreibung;
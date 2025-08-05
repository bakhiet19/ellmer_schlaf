import { HiSearchCircle } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function HeroPage() {
  return (
    <section
      className="h-screen w-full bg-cover bg-center relative px-6 sm:px-12 lg:px-24 flex items-center justify-center"
    >
      {/* طبقة التدرج اللوني الشفافة فوق الصورة */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/50 to-blue-100/30 backdrop-blur-sm"></div>

      {/* المحتوى */}
      <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-rose-700 mb-6 drop-shadow-lg">
          Finde die perfekte Unterkunft <br /> oder vermiete deine Immobilie
        </h1>

        <p className="text-lg sm:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
          Wir bringen Mieter und Vermieter zusammen – schnell, einfach und zuverlässig in Hamburg & Schleswig-Holstein.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-6">
          <NavLink
            to="/mieter"
            className="flex items-center gap-2 bg-rose-500 text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-rose-600 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            <span>Unterkunft finden</span>
            <HiSearchCircle className="w-6 h-6" />
          </NavLink>

          <NavLink
            to="/vermieter"
            className="bg-white border-2 border-rose-500 text-rose-500 px-10 py-3 rounded-full text-lg font-semibold hover:bg-rose-50 transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            Jetzt vermieten
          </NavLink>
        </div>

        <div className="text-sm text-gray-500">
          ⭐️ Bereits über <strong>1.000 zufriedene Kunden</strong> vertrauen auf uns
        </div>
      </div>
    </section>
  );
}

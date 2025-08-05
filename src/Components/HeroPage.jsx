import { HiSearchCircle } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export default function HeroPage() {
  return (
    <section className="bg-white h-screen w-full bg-cover bg-center px-6 sm:px-12 lg:px-24 hero">
      <div className="flex items-center justify-center h-full">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-rose-700 mb-6 drop-shadow-lg bg-white/10 p-6 rounded-2xl ring-1 ring-rose-200 animate-fade-in w-full backdrop-blur-md
">
            Finde die perfekte Unterkunft oder vermiete deine Immobilie
            </h1>
              {/* <p className="text-lg text-white mb-10 drop-shadow-sm animate-fade-in bg-red-300 py-3 rounded-2xl">
             Wir haben die Unterkünfte für Ihre Mitarbeiter in Hamburg & Schleswig-Holstein
            </p> */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <NavLink
                     to="/mieter"
            className="flex items-center gap-2 bg-rose-500 text-white px-12 py-3 rounded-lg text-lg font-medium hover:bg-rose-600 transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md"
            >
            <span>Unterkunft finden</span>
            <HiSearchCircle className="w-6 h-6" />
            </NavLink>
            <NavLink
              to="/vermieter"
              className="bg-white border border-rose-500 text-rose-500 px-12 py-3 rounded-lg text-lg font-medium hover:bg-rose-50 transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md"
            >
              Jetzt vermieten
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
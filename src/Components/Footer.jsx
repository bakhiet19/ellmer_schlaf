import { FaFacebook, FaInstagram, FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import ellmer from '../assets/ellmer.png';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="logoBG text-gray-200 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* الشرائح الأربعة */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-base mb-16">

          {/* معلومات عامة */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 tracking-wide">Information</h4>
            <ul className="space-y-3">
              <li><NavLink to='/about' className="flex items-center gap-2 hover:text-yellow-300 transition-transform duration-300 hover:translate-x-1"><FaArrowRight /> Über uns</NavLink></li>
              <li><NavLink to="/impressum" className="flex items-center gap-2 hover:text-yellow-300 transition-transform duration-300 hover:translate-x-1"><FaArrowRight /> Impressum</NavLink></li>
              <li><a href="/datenschutz" className="flex items-center gap-2 hover:text-yellow-300 transition-transform duration-300 hover:translate-x-1"><FaArrowRight /> Datenschutz</a></li>
              <li><a href="/terms" className="flex items-center gap-2 hover:text-yellow-300 transition-transform duration-300 hover:translate-x-1"><FaArrowRight /> AGB</a></li>
            </ul>
          </div>

          {/* المناطق */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 tracking-wide">Regionen</h4>
            <ul className="space-y-3">
              <li><NavLink to="/norddeutschland" className="flex items-center gap-2 hover:text-yellow-300 transition-transform duration-300 hover:translate-x-1"><FaArrowRight /> Norddeutschland</NavLink></li>
              <li><NavLink to="/süddeutschland" className="flex items-center gap-2 hover:text-yellow-300 transition-transform duration-300 hover:translate-x-1"><FaArrowRight /> Süddeutschland</NavLink></li>
              <li><NavLink to="/westdeutschland" className="flex items-center gap-2 hover:text-yellow-300 transition-transform duration-300 hover:translate-x-1"><FaArrowRight /> Westdeutschland</NavLink></li>
              <li><NavLink to="/ostdeutschland" className="flex items-center gap-2 hover:text-yellow-300 transition-transform duration-300 hover:translate-x-1"><FaArrowRight /> Ostdeutschland</NavLink></li>
            </ul>
          </div>

          {/* خدمات إضافية */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 tracking-wide">Services</h4>
            <ul className="space-y-3">
              <li><NavLink to="/beratung" className="flex items-center gap-2 hover:text-yellow-300 transition-transform duration-300 hover:translate-x-1"><FaArrowRight /> Beratung</NavLink></li>
              <li><NavLink to="/kontakt" className="flex items-center gap-2 hover:text-yellow-300 transition-transform duration-300 hover:translate-x-1"><FaArrowRight /> Kontakt</NavLink></li>
            </ul>
          </div>

          {/* التواصل الاجتماعي */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6 tracking-wide">Folge uns</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">
                <FaFacebook className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                <FaInstagram className="w-7 h-7" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                <FaWhatsapp className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* الشعار والنص التعريفي */}
        <div className="border-t border-gray-700 pt-10 text-center">
          <img src={ellmer} alt="Firmenlogo" className="mx-auto w-32 mb-4" />
          <p className="text-base logoTextWhite">
            Dein Zuhause in
            <span className="hover:text-yellow-300 transition-colors duration-200"> Schleswig-Holstein </span>
            und
            <span className="hover:text-yellow-300 transition-colors duration-200"> Hamburg </span>
          </p>
          <p className="mt-4 text-sm text-gray-400">&copy; 2025 DeineFirma. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
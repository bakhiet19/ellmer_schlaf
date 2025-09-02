import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import ellmer from '../assets/ellmer.png';
import { NavLink } from 'react-router-dom';


export default function Footer(){
    return(
      <footer className="logoBG text-gray-200 py-24">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* الروابط الرئيسية */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-base mb-16">

      {/* روابط عامة */}
      <div>
        <h4 className="text-white text-lg font-bold mb-6 tracking-wide">Information</h4>
        <ul className="space-y-3">
          <li><NavLink to='/about' className="hover:text-yellow-300 transition-colors duration-200">Über uns</NavLink></li>
          <li><NavLink to="/impressum" className="hover:text-yellow-300 transition-colors duration-200">Impressum</NavLink></li>
          <li><a href="/privacy" className="hover:text-yellow-300 transition-colors duration-200">Datenschutz</a></li>
          <li><a href="/terms" className="hover:text-yellow-300 transition-colors duration-200">AGB</a></li>
        </ul>
      </div>

      {/* روابط المناطق */}
      <div>
        <h4 className="text-white text-lg font-bold mb-6 tracking-wide">Regionen</h4>
        <ul className="space-y-3">
          <li><NavLink to="/norddeutschland" className="hover:text-yellow-300 transition-colors duration-200">Norddeutschland</NavLink></li>
          <li><NavLink to="/süddeutschland" className="hover:text-yellow-300 transition-colors duration-200">Süddeutschland</NavLink></li>
          <li><NavLink to="/westdeutschland" className="hover:text-yellow-300 transition-colors duration-200">Westdeutschland</NavLink></li>
          <li><NavLink to="/ostdeutschland" className="hover:text-yellow-300 transition-colors duration-200">Ostdeutschland</NavLink></li>
        </ul>
      </div>

      {/* روابط التواصل الاجتماعي */}
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

    {/* الصورة والنص التعريفي */}
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
    )
}
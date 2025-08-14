import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import ellmer from '../assets/ellmer.png';


// const Links = [
//   {url : '' , }
// ]



export default function Footer(){
    return(
        <footer className="bg-gray-900 text-gray-200 py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
      
      <div>
        <img src={ellmer} alt="Firmenlogo" className="w-28 mb-3" />
        <p className="text-sm text-gray-400">Dein Zuhause in <span className='logoText'> Schleswig-Holstein</span> und <span className='logoText'> Hamburg </span></p>
      </div>

      <div className="space-y-2">
        <a href="/about" className="block hover:text-red-400 transition">Über uns</a>
        <a href="/contact" className="block hover:text-red-400 transition">Kontakt</a>
        <a href="/privacy" className="block hover:text-red-400 transition">Datenschutz</a>
        <a href="/terms" className="block hover:text-red-400 transition">AGB</a>
      </div>

      <div className="flex space-x-4">
        <a href="#" className="hoverLogo transition"> <FaFacebook className='md:h-8 md:w-8 w-5 h-5' /> </a>
        <a href="#" className="hoverLogo transition"> <FaInstagram className='md:h-8 md:w-8 w-5 h-5' /> </a>
        <a href="#" className="hoverLogo transition"> <FaWhatsapp className='md:h-8 md:w-8 w-5 h-5' /> </a>
      </div>
    </div>

    <div className="mt-8 text-center text-sm text-gray-500">
      &copy; 2025 DeineFirma. Alle Rechte vorbehalten.
    </div>
  </div>
</footer>
    )
}
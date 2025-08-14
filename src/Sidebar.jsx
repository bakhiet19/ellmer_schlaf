import { useState, useEffect, useRef } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaTimes } from 'react-icons/fa';

export default function KontaktSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();

  // Schließt die Sidebar beim Klick außerhalb
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Öffnen-Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-1/2 right-4 transform -translate-y-1/2  p-3 rounded-full shadow-lg z-50 cursor-pointer transition logoBG logoTextWhite"
        aria-label="Kontakt öffnen"
      >
        <FaPhoneAlt size={28} />
      </button>

      {/* Leichte transparente Überlagerung */}
     

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 space-y-6">
          {/* Schließen-Button */}
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hoverLogo transition cursor-pointer"
              aria-label="Schließen"
            >
              <FaTimes size={20} />
            </button>
          </div>

          <h2 className="text-xl font-semibold text-gray-800">Kontaktmöglichkeiten</h2>

          <div className="space-y-4 text-gray-700">
            <a href="tel:+49123456789" className="flex items-center gap-3 logoText transition">
              <FaPhoneAlt /> Telefonanruf
            </a>
            <a href="https://wa.me/49123456789" target="_blank" className="flex items-center gap-3 logoText transition">
              <FaWhatsapp /> WhatsApp
            </a>
            <a href="mailto:info@example.com" className="flex items-center gap-3 logoText transition">
              <FaEnvelope /> E-Mail
            </a>
            <a href="https://maps.google.com" target="_blank" className="flex items-center gap-3 logoText transition">
              <FaMapMarkerAlt /> Standort
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
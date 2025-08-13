import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";
export default function Navlinks() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const links = [
    { label: t("nav.findApartment"), url: "/mieter" },
    { label: t("nav.listProperty"), url: "/details" },
    { label: t("nav.forEmployers"), url: "#" },
    { label: t("nav.contact"), url: "#" },
  ];

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        className="sm:hidden flex items-center px-3 py-2  hover:text-rose-600 focus:outline-none logoText"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-12 left-0 w-48 bg-white shadow-lg rounded-md z-50 sm:hidden">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.url}
              className="block px-4 py-2 text-gray-700 hover:bg-rose-50 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}

      {/* Desktop Menu */}
      <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-6">
        {links.map((link, index) => (
          <NavLink
            key={index}
            to={link.url}
            className="group relative px-2 py-1 text-[15px] font-medium text-gray-700 transition-colors duration-200 hover" 
          >
            {link.label}
            <span className="absolute left-0 bottom-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 logoBG"></span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
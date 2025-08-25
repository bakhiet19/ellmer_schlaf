import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Navlinks() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const dropRef = useRef(null);

  const links = [
    { label: "Startseite", url: "/#" },
    { label: t("nav.findApartment"), url: "/mieter" },
    { label: t("nav.listProperty"), url: "/vermieter" },
    { label: "Details", url: "/details" },
  ];

  useEffect(() => {
    const handleClick = (event) => {
      if (dropRef.current && !dropRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);


  
  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        className="sm:hidden flex items-center px-3 py-2 focus:outline-none logoText z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={dropRef}
          className="fixed top-12 left-0 w-full logoBGWhite shadow-md z-40 flex flex-col sm:hidden mt-8 sm:mt-0"
        >
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.url}
              className="text-center px-4 py-3 border-b border-gray-200 text-gray-700 hover:bg-rose-50 transition-colors duration-200"
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
          <NavLink key={index} to={link.url}>
            {({ isActive }) => (
              <div
                className={`group relative px-2 py-1 text-[15px] font-medium transition-colors duration-200 ${
                  isActive ? "isActive" : ""
                }`}
              >
                {link.label.toLocaleUpperCase()}
                <span
                  className={`absolute left-0 bottom-0 w-full h-[2px] origin-left transition-transform duration-300 logoBG ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                ></span>
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
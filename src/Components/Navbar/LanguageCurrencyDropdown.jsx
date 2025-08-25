import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Flag from 'react-world-flags';

function LanguageCurrencyDropdown() {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const dropdownRef = useRef(null);


    useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const languages = [
    { code: 'de', name: 'Deutsch', countryCode: 'DE' },
    { code: 'en', name: 'English', countryCode: 'GB' },
    { code: 'fr', name: 'Français', countryCode: 'FR' },
    { code: 'es', name: 'Español', countryCode: 'ES' },
    { code: 'it', name: 'Italiano', countryCode: 'IT' }
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  const currentLanguage = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
    <button
    onClick={() => setOpen(!open)}
    aria-haspopup="true"
    aria-expanded={open}
    className="cursor-pointer flex items-center text-gray-700 hover focus:outline-none gap-1"
  >
    <Flag code={currentLanguage.countryCode} style={{ width: 20, height: 15 }} />
    <span className="hidden md:inline text-sm font-medium ml-2">{currentLanguage.name}</span>
    
  </button>

  {/* Dropdown Menu */}
  {open && (
    <>
      {/* Desktop */}
      <div className="mt-8 sm:mt-2 hidden md:block absolute right-0  w-56 logoBGWhite border border-gray-200 rounded-md shadow-lg z-50 p-4 space-y-3 text-sm text-gray-700">
        <ul className="space-y-1">
          {languages.map(({ code, name, countryCode }) => (
            <li key={code}>
              <button
                onClick={() => changeLanguage(code)}
                className="flex items-center w-full text-left px-2 py-1 hoverLogoWhite rounded gap-2"
              >
                <Flag code={countryCode} style={{ width: 20, height: 15 }} />
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile */}
      <div className="fixed top-12 left-0 w-full logoBGWhite shadow-md z-40 flex flex-col md:hidden mt-8 sm:mt-2">
        {languages.map(({ code, name, countryCode }) => (
          <button
            key={code}
            onClick={() => {
              changeLanguage(code);
              setOpen(false);
            }}
            className="flex items-center px-4 py-3 border-b border-gray-200 text-gray-700 hover:bg-rose-50 gap-2"
          >
            <Flag code={countryCode} style={{ width: 20, height: 15 }} />
            <span>{name}</span>
          </button>
        ))}
      </div>
    </>
  )}
</div>

  );
}

export default LanguageCurrencyDropdown;

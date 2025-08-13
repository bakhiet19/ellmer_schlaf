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
    <div className="dropdown cursor-pointer " ref={dropdownRef}>
      <div className="relative">
       <div className="dropdown cursor-pointer" ref={dropdownRef}>
    <div className="relative">
    <button
      onClick={() => setOpen(!open)}
      aria-haspopup="true"
      aria-expanded={open}
      className="cursor-pointer flex items-center text-gray-700 hover focus:outline-none gap-1"
    >
      {/* العلم يظهر دائمًا */}
      <Flag code={currentLanguage.countryCode} style={{ width: 20, height: 15 }} />

      {/* اسم اللغة يظهر فقط من md وما فوق */}
      <span className="hidden md:inline text-sm font-medium ml-2">
        {currentLanguage.name}
      </span>

      {/* السهم يظهر فقط من md وما فوق */}
      <svg
        className="hidden md:inline h-4 w-4 ml-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    {open && (
      <div className="absolute right-0 mt-2 w-56 logoBGWhite border border-gray-200 rounded-md shadow-lg z-50 p-4 space-y-3 text-sm text-gray-700">
        <div>
          <div className="font-semibold mb-1"></div>
          <ul className="space-y-1">
            {languages.map(({ code, name, countryCode }) => (
              <li key={code}>
                <button
                  onClick={() => changeLanguage(code)}
                  className="cursor-pointer flex items-center w-full text-left px-2 py-1  rounded gap-2"
                >
                  <Flag code={countryCode} style={{ width: 20, height: 15 }} />
                  <span className="hidden md:inline">{name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )}
  </div>
</div>

        {open && (
          <div className="absolute right-0 mt-2 w-56 logoBGWhite border border-gray-200 rounded-md shadow-lg z-50 p-4 space-y-3 text-sm text-gray-700">
            <div>
              <div className="font-semibold mb-1"></div>
              <ul className="space-y-1">
                {languages.map(({ code, name, countryCode }) => (
                  <li key={code}>
                    <button
                      onClick={() => changeLanguage(code)}
                      className=" cursor-pointer flex items-center w-full text-left px-2 py-1 hoverLogoWhite rounded gap-2"
                    >
                      <Flag code={countryCode} style={{ width: 20, height: 15 }} />
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LanguageCurrencyDropdown;

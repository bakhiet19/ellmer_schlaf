import { useState } from 'react';

function LanguageCurrencyDropdown() {
  const [open, setOpen] = useState(false);

  return (
     <div className="dropdown">
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="true"
        aria-expanded={open}
        className="flex items-center text-gray-700 hover:text-rose-500 focus:outline-none gap-1"
      >
        🌐 <span className="text-sm font-medium">EN | €</span>
        <svg className="h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50 p-4 space-y-3 text-sm text-gray-700">
          <div>
            <div className="font-semibold mb-1">🌍 Language</div>
            <ul className="space-y-1">
              {["English", "Deutsch", "Français", "Español", "Italiano"].map((lang) => (
                <li key={lang}>
                  <a
                    href="#"
                    className="block px-2 py-1 hover:bg-gray-100 rounded"
                  >
                    {lang}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t pt-3">
            <div className="font-semibold mb-1">💰 Currency</div>
            <ul className="space-y-1">
              {["€ EUR", "$ USD", "£ GBP", "¥ JPY", "CHF"].map((curr) => (
                <li key={curr}>
                  <a
                    href="#"
                    className="block px-2 py-1 hover:bg-gray-100 rounded"
                  >
                    {curr}
                  </a>
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

export default LanguageCurrencyDropdown
import Logo from "../Components/Navbar/Logo";
import Navlinks from "../Components/Navbar/Navlinks";
import Button from "../Components/Button";
import LanguageCurrencyDropdown from "../Components/Navbar/LanguageCurrencyDropdown";
import { useTranslation } from "react-i18next";

export default function Navbar() {

  const {t} = useTranslation()

  return (
    <nav className="bg-white shadow-sm pb-3 z-50 ms-flex fixed top-0 left-0 w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="flex flex-row justify-center items-center md:justify-between md:items-center h-auto md:h-16 py-4 md:py-0 gap-4 md:gap-0">
          
          {/* Logo */}
          <div className="flex justify-between items-center w-full md:w-auto">
            <Logo />
          </div>

          {/* Navigation Links */}
          <div className="md:flex flex-1 justify-center">
            <Navlinks />
          </div>

          {/* Right Side Controls */}
        <div className="flex flex-nowrap justify-end items-center gap-3 md:gap-4 w-full md:w-auto">
            
            <LanguageCurrencyDropdown />

            <Button  label="buttons.login" styles="bg-rose-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-rose-600 focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
               Anmelden 
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

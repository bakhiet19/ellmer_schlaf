import Logo from "./Logo";
import Navlinks from "./Navlinks";
import LanguageCurrencyDropdown from "./LanguageCurrencyDropdown";

export default function Navbar() {
  return (
    <nav className="shadow-sm pb-3 z-50 ms-flex fixed top-0 left-0 w-full logoBGWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-3">
       <div className="flex flex-row justify-center items-center md:justify-between md:items-center h-auto md:h-16 py-4 md:py-0 gap-4 md:gap-0">
          
          <div className="flex justify-between items-center w-full md:w-auto">
            <Logo />
          </div>

          <div className="md:flex flex-1 justify-center">
            <Navlinks />
          </div>

        <div className="flex flex-nowrap justify-end items-center gap-3 md:gap-4 w-full md:w-auto">
            
            <LanguageCurrencyDropdown />

            {/* <Button  styles="bg-rose-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-rose-600 focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
               Anmelden 
            </Button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

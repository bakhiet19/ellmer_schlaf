import { FaPhone, FaRegEnvelope } from "react-icons/fa";

const SearchButton = () => {
  return (
    <button
     
      className={`w-full sm:w-auto px-10 py-3 font-bold rounded-xl transition duration-300
         ease-in-out logoTextWhite logoBG hoverLogoMehr cursor-pointer flex items-center gap-1`}
    >
      Angebot erhalten <FaPhone className="text-lg" />
    </button>
  );
};

export default SearchButton;

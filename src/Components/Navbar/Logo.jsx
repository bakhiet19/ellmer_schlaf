import { NavLink } from "react-router-dom";
import logo from "../../assets/ellmer.png"; // استيراد الصورة بشكل صحيح

export default function Logo() {
  return (
    <div className="flex items-center">
      <NavLink to="/">
        <div className="flex-shrink-0 flex items-center">
         <img src={logo} alt="Logo" className="h-10 w-18 sm:h-14 sm:w-32" />
          {/* <span className="ml-2 text-sm font-bold text-rose-500">Vollausgestattete Mitarbeiterunterkünfte in Hamburg & Schleswig-Holstein</span> */}
        </div>
      </NavLink>
    </div>
  );
}
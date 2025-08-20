import { NavLink } from "react-router-dom";
import hero1 from '../assets/hero1.png'
import Head from "../Components/Head";
import Bubble from "./Bubble";
const MieterSection = () => {
  return (

    
     <div className="flex flex-col justify-around items-center logoBGWhite logoText p-5 sm:p-10 relative overflow-hidden">
            <div className="text-center">
              <Head className="animate-fade-in">
                Ich suche eine Wohnung
              </Head>
              <p className="text-base sm:text-xl font-medium text-center mb-6 opacity-0 animate-fade-in delay-200">
                Entdecken Sie hochwertige möblierte Wohnungen.<br />
                Finden Sie Ihr perfektes Zuhause – schnell und unkompliziert.
              </p>
              <button className="mx-auto block  px-4 sm:px-12 py-2 sm:py-3 rounded-full font-bold transition mb-4 opacity-0 animate-fade-in delay-50 text-sm sm:text-base cursor-pointer borderRed hoverLogoWhite">
               <NavLink to='/mieter'> {'Jetzt suchen'.toUpperCase()}</NavLink>
              </button>
            </div>
    
            {/* صورة مع فقاعات */}
            <div className="relative mt-5 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px]">
              <img src={hero1} alt="Suche Illustration" loading="lazy" className="w-full h-full object-contain p-3 sm:p-5 z-10 relative" />
    
              {/* فقاعات */}
              
              <Bubble className='-top-8 sm:-top-10 left-6 sm:left-12 logoTextWhite'>
                10.000+ Wohnungen
              </Bubble>
    
              <Bubble  className="top-6 sm:top-10 -left-[70px] sm:-left-[100px] logoTextWhite">
                Einfache Buchung
              </Bubble>
    
              <Bubble className="top-6 sm:top-10 right-0 px-2 sm:px-3 sm:py-3 logoTextWhite">
                24/7 Support
              </Bubble>


            </div>
          </div>
  );
};

export default MieterSection;
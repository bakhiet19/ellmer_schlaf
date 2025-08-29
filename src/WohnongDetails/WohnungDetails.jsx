import "swiper/css";
import "leaflet/dist/leaflet.css";
import WohnungBilder from "./WohnungBilder";
import Beschreibung from "./Beschreibung";
import ApartmentMap from "../Components/Map/Map";
import QuestionStep, { Questions } from "../Mieter/Questions";




const position = [53.551086, 9.993682]; // Hamburg Zentrum

const WohnungDetails = () => {

  return (

     <div className="gap-8 w-full font-sans mt-22 mb-10">

      <WohnungBilder />
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 rounded-3xl shadow-xl">  
            <QuestionStep/>     
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Beschreibung />
         <div className="w-full min-h-[450px] sm:h-[40vh]">
         <ApartmentMap />
        </div>   
        </div>
        
        
        {/* <AirbnbStyleCalendar /> */}
        
      
         {/* <Rechnung /> */}
         
        </div>
      </div>
  );
};

export default WohnungDetails;
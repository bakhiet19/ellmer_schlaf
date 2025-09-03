import AccommodationPage from "../Components/AccommodationPage";
import FeaturesSection from "../Components/FeaturesSection";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero/Hero";
import ApartmentMap from "../Components/Map/Map";
import Navbar from "../Components/Navbar/Navbar";
import KontaktSidebar from "../Components/Sidebar";
import Example from "../Example";
import Fragen from "./Fragen";
import SingleQuestion from "./Questions";

const MieterHome = () => {

  return (
    <>
    <Navbar />
    <Hero />
   {/* <Example /> */}
   <SingleQuestion className="mieter my-8 w-full md:w-[70vw] mx-auto" />
   {/* <AccommodationPage /> */}
    <div className="flex justify-center mx-auto mb-10 p-1 md:p-6 bg-gray-50 rounded-xl shadow w-full h-[80vh] mt-10">
      <ApartmentMap />
    </div>
   <KontaktSidebar />
   {/* <FeaturesSection /> */}
    <Fragen />
    <Footer />
    </>
  )
};

export default MieterHome;
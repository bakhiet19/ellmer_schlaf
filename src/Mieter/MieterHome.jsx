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
    {/* <Hero /> */}
   <Example />
   <SingleQuestion className="mieter mt-8 w-full md:w-[70vw] mx-auto" />
    <div className="w-8xl h-[500px] mt-15 mx-auto  bg-gray-50 rounded-xl shadow">
      <ApartmentMap />
    </div>
   <KontaktSidebar />
    <Fragen />
    <Footer />
    </>
  )
};

export default MieterHome;
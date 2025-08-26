import Footer from "../Components/Footer";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import Fragen from "./Fragen";
import SingleQuestion from "./Questions";

const MieterHome = () => {
  return (
    <>
    <Navbar />
    <Hero />
   <SingleQuestion className="mieter mt-8 w-full md:w-[70vw] mx-auto" />
    <Fragen />
    <Footer />
    </>
  )
};

export default MieterHome;
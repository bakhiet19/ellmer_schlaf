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
    <SingleQuestion className="mieter" />
    <Fragen />
    <Footer />
    </>
  )
};

export default MieterHome;
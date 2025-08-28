import Footer from "../Components/Footer";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import Example from "../Example";
import VermieterSection from "./VermieterSection";
import Vermieter from "./Vermiter";

const VermieterHome = () => {
  return (
    <>
        <Navbar />
        {/* <Hero /> */}
        <Example />
        <Vermieter />
        <Footer />
        </>
  );
};

export default VermieterHome;
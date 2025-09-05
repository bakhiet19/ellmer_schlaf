import Footer from "../Components/Sections/Footer";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import Fragen from "../Mieter/Fragen";
import VermieterArticles from "./VermieterArticles";
import Vermieter from "./Vermiter";

const VermieterHome = () => {


  return (
    <>
        <Navbar />
        <Hero />
        {/* <Example /> */}
        <Fragen />
        <Vermieter />
          
        <VermieterArticles />
        <Footer />
        </>
  );
};

export default VermieterHome;
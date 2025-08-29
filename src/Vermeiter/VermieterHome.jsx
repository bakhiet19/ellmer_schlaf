import Footer from "../Components/Footer";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import Example from "../Example";
import VermieterArticles from "./VermieterArticles";
import VermieterSection from "./VermieterSection";
import Vermieter from "./Vermiter";

const VermieterHome = () => {
  return (
    <>
        <Navbar />
        {/* <Hero /> */}
        <Example />
        <Vermieter />
        <VermieterArticles />
        <Footer />
        </>
  );
};

export default VermieterHome;
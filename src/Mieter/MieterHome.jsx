import Footer from "../Components/Footer";
import HeroPage from "../Components/HeroPage";
import Navbar from "../Components/Navbar/Navbar";
import Fragen from "./Fragen";
import SingleQuestion from "./Questions";

const MieterHome = () => {
  return (
    <>
    <Navbar />
    <HeroPage />
    <SingleQuestion />
    <Footer />
    </>
  )
};

export default MieterHome;
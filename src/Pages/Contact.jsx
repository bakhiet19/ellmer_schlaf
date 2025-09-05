import FeaturesSection from "../Components/Sections/FeaturesSection";
import Footer from "../Components/Sections/Footer";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import KontaktSidebar from "../Components/Sidebar";
import Fragen from "../Mieter/Fragen";
import SingleQuestion from '../Mieter/Questions'
import KontaktSection from "../Components/Sections/ContaktForm";
import ContactReasons from "./ContactReasons";

const Contact = () => {
  return (
    <div>
        <Navbar />
        <Hero className='md:grid-cols-2' />
        <SingleQuestion className='my-40 max-w-7xl mx-auto' />  
        <FeaturesSection />       
        <Fragen />
        <KontaktSection />
        <ContactReasons />
        <KontaktSidebar />
        <Footer />
    </div>
  );
};

export default Contact;
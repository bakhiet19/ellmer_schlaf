import Footer from "../Components/Footer";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import Fragen from "../Mieter/Fragen";
import SingleQuestion from '../Mieter/Questions'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <SingleQuestion className='my-40 max-w-7xl mx-auto' />  
        <Fragen />
        <Footer />
    </div>
  );
};

export default Contact;
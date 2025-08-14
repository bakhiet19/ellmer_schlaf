import UberUns from "../Components/Features/UberUns";
import Navbar from "../Components/Navbar/Navbar";
import Kunden from "../Components/swipper/Kunden";
import Footer from "../Components/Footer";
import Carts from "../Components/Cart/Carts";
import ScrollToTopButton from "../ScrollToTopButton";
import ContactForm from "../ContaktForm";
import Hero from "../Components/Hero/Hero";
import ContactSidebar from "../Sidebar";
import { Filter } from "../Hooks/FilterContext";



export default function Home(){
    return(
        <Filter>
        <Navbar />
        <Hero />
        <Carts /> 
        <UberUns  />
        <ContactForm />
        <Kunden />      
        <ScrollToTopButton />
        <ContactSidebar />
        <Footer />
        </Filter>
    )
}   
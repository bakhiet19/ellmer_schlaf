import UberUns from "../Components/Features/UberUns";
import Navbar from "../Components/Navbar/Navbar";
import Kunden from "../Components/swipper/Kunden";
import ApartmentMap from "../Components/Map/Map";
import Footer from "../Components/Footer";
import Carts from "../Components/Cart/Carts";
import ScrollToTopButton from "../ScrollToTopButton";
import ContactForm from "../ContaktForm";
import Hero from "../Components/Hero/Hero";
import FilterSection from "../Components/Cart/Filter/FiltersSection";



export default function Home(){
    return(
        <>
        <Navbar />
        <Hero />
        {/* <HeroPage /> */}
         {/* <FilterSection /> */}
        <Carts /> 
        <UberUns  />
        {/* <ApartmentMap /> */}
        <ContactForm />
        <Kunden />      
        <ScrollToTopButton />
        <Footer />
        {/* <Wohnung /> */}
        </>
    )
}   
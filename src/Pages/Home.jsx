import UberUns from "../Components/Features/UberUns";
import HeroPage from "../Components/HeroPage";
import Navbar from "../Components/Navbar/Navbar";
import Kunden from "../Components/swipper/Kunden";
import ApartmentMap from "../Components/Map/Map";
import Footer from "../Components/Footer";
import Carts from "../Components/Cart/Carts";
import ScrollToTopButton from "../ScrollToTopButton";
import ContactForm from "../ContaktForm";


export default function Home(){
    return(
        <>
        <Navbar />
        <HeroPage />
        <Carts /> 
        <UberUns />
        <ApartmentMap />
        <ContactForm />
        <Kunden />      
        <ScrollToTopButton />
        <Footer />
        {/* <Wohnung /> */}
        </>
    )
}   
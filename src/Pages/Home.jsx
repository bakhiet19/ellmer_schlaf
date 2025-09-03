import UberUns from "../Components/Features/UberUns";
import Navbar from "../Components/Navbar/Navbar";
import Kunden from "../Components/swipper/Kunden";
import Footer from "../Components/Footer";
import Carts from "../Components/Cart/Carts";
import ScrollToTopButton from "../Components/ScrollToTopButton";

import { Filter } from "../Hooks/FilterContext";
import KontaktSection from "../Components/ContaktForm";
import KontaktSidebar from "../Components/Sidebar";
import Example from "../Example";
import Fragen from "../Mieter/Fragen";
import VermieterSection from "../Vermeiter/Vermiter";
import AccommodationPage from "../Components/AccommodationPage";
import FeaturesSection from "../Components/FeaturesSection";
import Hero from "../Components/Hero/Hero";


export default function Home(){
    return(
        <>
        <Navbar />
        {/* <Hero /> */}
        <Example />
        <AccommodationPage />
        <Carts /> 
        <UberUns  />
        <VermieterSection />
        <Fragen />
        <FeaturesSection />
        <Kunden />      
        <KontaktSection />     
        <ScrollToTopButton />
        <KontaktSidebar />
        <Footer />
        </>
    )
}   
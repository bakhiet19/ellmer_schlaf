import UberUns from "../Components/Features/UberUns";
import Navbar from "../Components/Navbar/Navbar";
import Kunden from "../Components/swipper/Kunden";
import Footer from "../Components/Footer";
import Carts from "../Components/Cart/Carts";
import ScrollToTopButton from "../Components/ScrollToTopButton";

import Hero from "../Components/Hero/Hero";
import { Filter } from "../Hooks/FilterContext";
import KontaktSection from "../Components/ContaktForm";
import KontaktSidebar from "../Components/Sidebar";



export default function Home(){
    return(
        <Filter>
        <Navbar />
        <Hero />
        <Carts /> 
        <UberUns  />
         <Kunden />      
        <KontaktSection />     
        <ScrollToTopButton />
        <KontaktSidebar />
        <Footer />
        </Filter>
    )
}   
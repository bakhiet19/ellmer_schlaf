import Cart from "../Components/Cart/Cart";
import UberUns from "../Components/Features/UberUns";
import HeroPage from "../Components/HeroPage";
import Navbar from "../Components/Navbar/Navbar";
import Kunden from "../Components/swipper/Kunden";
import ApartmentMap from "../Components/Map/Map";
import Footer from "../Components/Footer";


export default function Home(){
    return(
        <>
        <Navbar />
        <HeroPage />
         <Cart /> 
        <UberUns />
        <ApartmentMap />
        <Kunden />      
        <Footer />
        {/* <Wohnung /> */}
        </>
    )
}   